module.exports = {
    name: 'twitter',
    aliases: ['tw'],
    description: "Makes a embed for twitter link.",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`https://twitter.com/ItsJustAragon`);
    }
}