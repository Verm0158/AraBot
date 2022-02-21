module.exports = {
    name: 'hug',
    description: "Notifies a person with a hug",
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

        function randomMessage() {
            const sentenceArray = [
                "How cute!",
                "You made my day!",
                "This is breathtaking!",
                "You guys are amazing!",
                "You are loved <3",
                "You are respected <3",
                "You are accepted <3"
            ];
            const randomSentence = Math.floor(Math.random() * sentenceArray.length)
            return sentenceArray[randomSentence];
        }
        
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('please use a proper mention if you want to hug someone.');
            }

            const random = randomMessage();

            return message.reply(`you hugged ${user} :purple_heart:! ${random}`)
        }
    }
}