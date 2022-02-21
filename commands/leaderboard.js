const Levels = require ('discord-xp');

module.exports = {
    name: 'leaderboard',
    aliases: 'lb',
    description: 'Creates a leaderboard',
    async execute(message, args, cmd, client, Discord) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10);
        if (rawLeaderboard.Levels < 1) return reply("Nobody is in the leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level} \nXP: ${e.xp.toLocaleString()}`);

        const embed = new Discord.MessageEmbed()
        .setTitle('AraBot Leaderboard')
        .setColor('#C1134E')
        .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
        .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
        .setDescription(`${lb.join("\n\n")}`);

        message.channel.send(embed);
    }
}