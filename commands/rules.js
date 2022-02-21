module.exports = {
    name: 'rules',
    description: 'Makes a rules embed',
    execute(message, args, cmd, client, Discord) {
        if (message.member.roles.cache.has('766725245544693760') || message.member.roles.cache.has('767154261070315560') || message.member.roles.cache.has('790228135894974475')) {
            const embedRules = new Discord.MessageEmbed()
            .setColor('#C1134E')
            .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setTitle('Rules')
            .setDescription("1. Be respectful to each other at all time.\n\n 2. No instults or any kind of discriminatory speech. This includes racism, sexism, homophobia, transphobia and so on...\n\n 3. This is an LGBTQIA+ friendly server, the use of any slurs under any circumstance will result in an immediate ban.\n\n 4. No NSFW related posts or messages.\n\n 5. Please keep discussion in English only.\n\n 6. Use the correct channel.\n\n 7. No @everyone.\n\n 8. No self-promoting outside of the <#774934025592373288> channel.\n\n 9. No spamming.\n\n 10. No loopholes.\n\n 11. No ban or mute evasions.\n\n 12. Do not bring politics or religion into the server unless said otherwise by the staff team.\n\n 13. This server is 13+ as it is against the Discord Terms of Service to be on this platform below the age of 13.\n\n **Breaking any of these rules will result in a punishment deemed necessary by the Moderation team.**\n**If you have any questions please message a moderator or Aragon.**")
            .setFooter("Updated on 1-10-2021 at 9PM CET")
        
            message.channel.send(embedRules);
        } else {
            message.reply("you don't have the right permissions to do that.");
        }
    }
}