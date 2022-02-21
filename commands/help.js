module.exports = {
    name: 'help',
    description: "Makes a embed for help commands.",
    execute(message, args, cmd, client, Discord) {
        const embedHelp = new Discord.MessageEmbed()
            .setColor('#C1134E')
            .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
            .setTitle('Public Bot Commands')
            .setDescription("__**Send Love Commands**__\n**!hug `@PLAYER`**\n Use this command to send some love to someone you like! You earn extra experience points when you use this command. \n\n**!compliment `@PLAYER`**\n Arabot will generate a random compliment to the player you provided! You earn extra experience points when you use this command. \n\n__**Music Bot Commands**__\n**!play `YOUTUBE LINK/TITLE` <---> !p `YOUTUBE LINK/TITLE`**\n This command let's you play youtube videos inside a discord voice channel! Make sure you are in a voice channel when you activate the bot. You can paste an existing youtube link after the command or fill in search arguments and AraBot will search the video on YouTube for you. If you add more then one song, it will be added to the queue.\n\n**!stop <---> !s**\n Stops the music and leaves the voice channel.\n\n **!skip <---> !n**\n Skips the song and moves to the next one in the queue.\n\n __**Level Bot Commands**__\n **!level <---> !rank <---> !r**\n Shows the rank and level you are and the amount of experience you need for your next level.\n\n**!leaderboard <---> !lb**\n Shows the leaderboard.\n\n__**Info Bot Commands**__\n**!schedule**\n Command for sending an embed with the Twitch Schedule.\n\n**!socials**\n Command for sending an embed with the all of current social accounts.\n\n**Licensed by <@208232518715965440>**")
            .setTimestamp();

        message.channel.send(embedHelp);
    }
}