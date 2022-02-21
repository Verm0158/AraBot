module.exports = {
    name: 'helpmod',
    description: 'Makes a embed for mod commands',
    execute(message, args, cmd, client, Discord) {
        if (message.member.roles.cache.has('766725245544693760') || message.member.roles.cache.has('767154261070315560') || message.member.roles.cache.has('790228135894974475')) {
            const embedHelpmod = new Discord.MessageEmbed()
            .setColor('#C1134E')
            .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setTitle('Private Bot Commands')
            .setDescription("⚠️**Warning**⚠️\n These commands are very powerfull, use them wisely!\n\n **`!clear [AMOUNT]`**\n Clears the amount of messages you provided. \n\n **Licensed by <@208232518715965440>**")
            .setTimestamp();

            message.reply("I have send you a private message.")
            message.author.send(embedHelpmod);
        } else {
            message.reply("you don't have the right permissions to do that.");
        }
    }
}