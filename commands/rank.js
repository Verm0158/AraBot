const Levels = require ('discord-xp');
const canvacord = require('canvacord');

module.exports = {
    name: 'rank',
    aliases: ['r', 'level'],
    description: 'Makes a rank image',
    async execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id, true);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.reply("You don't heave XP. Try to send some messages.");

        const rank = new canvacord.Rank()
            .setAvatar(message.author.displayAvatarURL({ dynmaic: false, format: 'png'}))
            .setBackground("IMAGE", 'images/Aragon_logo_background.jpg')
            .setOverlay('#000000', 0.7)
            .setLevel(user.level)
            .setRank(user.position)
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(message.member.presence.status)
            .setProgressBar(['#5B22D2', '#FFFFFF'], "GRADIENT")
            .setUsername(message.author.username)
            .setDiscriminator(message.author.discriminator, '#e8e8e8')
        rank.build()
            .then(data => {
                const attatchment = new Discord.MessageAttachment(data, 'AragonRankcard.png')
                message.channel.send(attatchment);
            })
    }
}