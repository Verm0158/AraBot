module.exports = {
    name: 'instagram',
    aliases: ['ig'],
    description: "Makes a embed for instagram link.",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`https://www.instagram.com/itsjustaragon/`);
    }
}