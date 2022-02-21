module.exports = {
    name: 'youtube',
    aliases: ['yt'],
    description: "Makes a embed for youtube link.",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`https://www.youtube.com/channel/UCu1jaJfmmYYedhxUBJMuRqQ`);
    }
}