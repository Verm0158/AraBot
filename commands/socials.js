module.exports = {
    name: 'socials',
    description: 'An Embed for the socials',
    execute(message, args, cmd, client, Discord) {
        if (message.member.roles.cache.has('766725245544693760') || message.member.roles.cache.has('767154261070315560') || message.member.roles.cache.has('790228135894974475')) {
            const embedSocials = new Discord.MessageEmbed()
            .setColor('#C1134E')
            .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setTitle("Socials")
            .setDescription("**You can also find me on these socials!**")
            .addFields(
                {name: "Socials", value: "<:Twitch:801921852473344021> [Twitch](https://www.twitch.tv/itsjustaragon)\n\n <:Youtube:801921458493587476> [Youtube](https://www.youtube.com/channel/UCu1jaJfmmYYedhxUBJMuRqQ)\n\n\n <:Twitter:801922002507792435> [Twitter](https://twitter.com/ItsJustAragon)\n\n <:TikTok:802199514445774909> [TikTok](https://www.tiktok.com/@itsjustaragon)\n\n <:Instagram:801921733715034162> [Instagram](https://www.instagram.com/itsjustaragon/)\n\n <:Discord:801921496905809942> [Discord](https://discord.gg/DWQSGnk)", inline: true},
                {name: "Links", value: "(https://www.twitch.tv/itsjustaragon)\n\n (https://www.youtube.com/channel/UCu1jaJfmmYYedhxUBJMuRqQ)\n\n (https://twitter.com/ItsJustAragon)\n\n (https://www.tiktok.com/@itsjustaragon)\n\n (https://www.instagram.com/itsjustaragon/)\n\n (https://discord.gg/DWQSGnk)", inline: true}
            );

            message.channel.send(embedSocials);
        } else {
            message.reply("you don't have the right permissions to do that.");
        }
    }
}