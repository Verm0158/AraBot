module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message.",
    async execute(message, args, cmd, client, Discord) {
        if (message.member.roles.cache.has('766725245544693760') || message.member.roles.cache.has('767154261070315560') || message.member.roles.cache.has('790228135894974475')) {
            const channel = '795614904312266762';
            const sheHerTeamRole = message.guild.roles.cache.find(role => role.name === "She/Her");
            const heHimTeamRole = message.guild.roles.cache.find(role => role.name === "He/Him");
            const theyThemTeamRole = message.guild.roles.cache.find(role => role.name === "They/Them");
            const sheTheyTeamRole = message.guild.roles.cache.find(role => role.name === "She/They");
            const heTheyTeamRole = message.guild.roles.cache.find(role => role.name === "He/They");
            const theySheTeamRole = message.guild.roles.cache.find(role => role.name === "They/She");
            const theyHeTeamRole = message.guild.roles.cache.find(role => role.name === "They/He");
            const anyPronounsTeamRole = message.guild.roles.cache.find(role => role.name === "Any Pronouns");
            const noPronounsTeamRole = message.guild.roles.cache.find(role => role.name === "No pronouns");
            const askForPronounsTeamRole = message.guild.roles.cache.find(role => role.name === "ask for pronouns");
            const neoProunounsTeamRole = message.guild.roles.cache.find(role => role.name === "neopronouns")

            const SheHerEmoji = '⬜';
            const HeHimEmoji = '🟧';
            const TheyThemEmoji = '🟦';
            const SheTheyEmoji = '🟥';
            const HeTheyEmoji = '🟫';
            const TheySheEmoji = '🟪';
            const TheyHeEmoji = '🟩';
            const AnyPronouns = '🟨';
            const noPronounsEmoji = '🔴';
            const askForPronounsEmoji = '🟠';
            const neoPronounsEmoji = '⚪';

            let embed = new Discord.MessageEmbed()
                .setColor('#C1134E')
                .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
                .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
                .setTitle('Set Role')
                .setDescription("**Choose your pronouns here**\n\n"
                    + `${SheHerEmoji} for She / Her\n`
                    + `${HeHimEmoji} for He / Him\n`
                    + `${TheyThemEmoji} for They / Them\n`
                    + `${SheTheyEmoji} for She / They\n`
                    + `${HeTheyEmoji} for He / They\n`
                    + `${TheySheEmoji} for They / She\n`
                    + `${TheyHeEmoji} for They / He\n`
                    + `${AnyPronouns} for Any Pronouns\n`
                    + `${noPronounsEmoji} for No Pronouns\n`
                    + `${askForPronounsEmoji} for Ask For Pronouns\n`
                    + `${neoPronounsEmoji} for Neopronouns`);

            let messageEmbed = await message.channel.send(embed);
            messageEmbed.react(SheHerEmoji);
            messageEmbed.react(HeHimEmoji);
            messageEmbed.react(TheyThemEmoji);
            messageEmbed.react(SheTheyEmoji);
            messageEmbed.react(HeTheyEmoji);
            messageEmbed.react(TheySheEmoji);
            messageEmbed.react(TheyHeEmoji);
            messageEmbed.react(AnyPronouns);
            messageEmbed.react(noPronounsEmoji);
            messageEmbed.react(askForPronounsEmoji);
            messageEmbed.react(neoPronounsEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === SheHerEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(sheHerTeamRole);
                    }
                    if (reaction.emoji.name === HeHimEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(heHimTeamRole);
                    }
                    if (reaction.emoji.name === TheyThemEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(theyThemTeamRole);
                    }
                    if (reaction.emoji.name === SheTheyEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(sheTheyTeamRole);
                    }
                    if (reaction.emoji.name === HeTheyEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(heTheyTeamRole);
                    }
                    if (reaction.emoji.name === TheySheEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(theySheTeamRole);
                    }
                    if (reaction.emoji.name === TheyHeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(theyHeTeamRole);
                    }
                    if (reaction.emoji.name === AnyPronouns) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(anyPronounsTeamRole);
                    }
                    if (reaction.emoji.name === noPronounsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(noPronounsTeamRole);
                    }
                    if (reaction.emoji.name === askForPronounsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(askForPronounsTeamRole);
                    }
                    if (reaction.emoji.name === neoPronounsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(neoProunounsTeamRole);
                    }
                } else {
                    return;
                }
            });

            client.on('messageReactionRemove', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === SheHerEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(sheHerTeamRole);
                    }
                    if (reaction.emoji.name === HeHimEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(heHimTeamRole);
                    }
                    if (reaction.emoji.name === TheyThemEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(theyThemTeamRole);
                    }
                    if (reaction.emoji.name === SheTheyEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(sheTheyTeamRole);
                    }
                    if (reaction.emoji.name === HeTheyEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(heTheyTeamRole);
                    }
                    if (reaction.emoji.name === TheySheEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(theySheTeamRole);
                    }
                    if (reaction.emoji.name === TheyHeEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(theyHeTeamRole);
                    }
                    if (reaction.emoji.name === AnyPronouns) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(anyPronounsTeamRole);
                    }
                    if (reaction.emoji.name === noPronounsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(noPronounsTeamRole);
                    }
                    if (reaction.emoji.name === askForPronounsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(askForPronounsTeamRole);
                    }
                    if (reaction.emoji.name === neoPronounsEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.remove(neoProunounsTeamRole);
                    }
                } else {
                    return;
                }
            });
        } else {
            message.reply("you don't have the right permissions to do that.");
        }
    }
}