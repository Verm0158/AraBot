module.exports = {
    name: 'rickroll',
    description: "Notifies a person with a rickroll",
    execute(message, args, cmd, client, Discord) {
        const talkedRecently = new Set();

        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 2 minutes before typing this again. - " + message.author);
        } else {
            function getUserFromMention(mention) {
                if (!mention) return;

                if (mention.startsWith('<@') && mention.endsWith('>')) {
                    mention = mention.slice(2, -1);

                    if (mention.startsWith('!')) {
                        mention = mention.slice(1);
                    }

                    return client.users.cache.get(mention);
                }
            }

            if (args[0]) {
                const user = getUserFromMention(args[0]);
                if (!user) {
                    return message.reply('please use a proper mention if you want to rickroll someone.');
                }

                return message.channel.send(`${user} You've been rickrolled! \n https://tenor.com/view/dance-moves-dancing-singer-groovy-gif-17029825 `)
            }

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, 60000)
        }
    }
}