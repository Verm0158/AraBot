module.exports = {
    name: 'clear',
    description: "Clears an X amount of messages",
    async execute(message, args, cmd, client, Discord) {
        if (message.member.roles.cache.has('766725245544693760') || message.member.roles.cache.has('767154261070315560') || message.member.roles.cache.has('790228135894974475')) {
            if (!args[0]) return message.reply("please enter the amount of messages that you want to clear.");
            if (isNaN(args[0])) return message.reply("please enter a real number.");
            
            if (args[0] > 100) return message.reply("you can't delete more than 100 messages.");
            if (args[0] < 1) return message.reply("you must delete atleast one message to work.");

            await message.channel.messages.fetch({limit: args[0]}).then(messages => {
                message.channel.bulkDelete(messages);
            });
        } else {
            message.reply("you don't have the right permissions to do that.")
        }
    }
}