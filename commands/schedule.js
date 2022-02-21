module.exports = {
    name: 'schedule',
    description: 'A Embed for the schedule',
    execute(message, args, cmd, client, Discord) {
        const embedSchedule = new Discord.MessageEmbed()
        .setColor('#C1134E')
        .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
        .setTitle("Schedule")
        .addFields(
            {name: 'Days', value: 'Monday\n Wednesday\n Friday\n Sunday', inline: true},
            {name: 'Time', value: '10PM CET until ???\n 10PM CET until ???\n 10PM CET until ???\n 2PM CET until ???', inline: true}
        )
        .setFooter("Updated on 12-21-2020 at 12PM")

        message.channel.send(embedSchedule);
    }
}