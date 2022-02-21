module.exports = {
    name: 'pluralkit',
    aliases: ['pk'],
    description: "Sends a pluralkit message",
    execute(message, args, cmd, client, Discord) {
        message.channel.send(`We have PluralKit in this server! PluralKit is a bot for systems (more than one person sharing a body) that allows the different members to use proxy tags to differentiate without using multiple accounts. It works by deleting and re-sending messages through a webhook, which - due to discord limitations - has a [BOT] tag. If you see a "bot" talking, it isn't a bot, it's a system member using pluralkit. Please do not joke about "bots talking to me" as it makes many systems uncomfortable.`);
    }
}