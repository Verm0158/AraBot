module.exports = {
    name: 'pat',
    description: "Notifies a person with a pat",
    execute(message, args, cmd, client, Discord) {
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

            return message.channel.send(`${user} Pat pat!`)
        }
    }
}