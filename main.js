const Discord = require("discord.js");
require("dotenv").config();
const Levels = require("discord-xp");
const cron = require("cron");

const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

Levels.setURL(process.env.MONGODB_TOKEN);

const fs = require("fs");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const profanities = [
  "Anal",
  "Cock",
  "slut",
  "cock",
  "cocks",
  "clitoris",
  "cum",
  "cumming",
  "creampie",
  "cumshot",
  "Rape",
  "deepthroat",
  "pedophile",
  "doggiestyle",
  "doggystyle",
  "faggot",
  "fag",
  "masturbate",
  "masturbating",
  "masturbation",
  "sex",
  "sexcam",
  "suicide",
  "kms",
  "cunt",
  "negro",
  "nig",
  "nig-nog",
  "nigga",
  "nigger",
  "nigguh",
  "n1gger",
  "nigg3r",
  "n1gg3r",
  "nig ger",
  "nik gur",
  "nig gur",
  "n i g g e r",
  "n i g e r",
  "prostitute",
  "slut",
  "whore",
  "jizz",
  "smegma",
  "spunk",
  "vagina",
  "wank",
  "retard",
  "erect",
  "erection",
  "penis",
  "bra",
  "breasts",
  "c.0.c.k",
  "c.o.c.k",
  "c.u.n.t",
  "c0ck",
  "c-0-c-k",
  "c0cksucker",
  "cocksmoker",
  "cocksniffer",
  "cocksucer",
  "cocksuck",
  "cocksuck",
  "cocksucked",
  "cocksucker",
  "cock-sucker",
  "cocksuckers",
  "cocksucking",
  "cocksucks",
  "cocksuka",
  "cocksukka",
  "pornhub",
  "pornhub.com",
  "cocain",
  "cocaine",
  "coochy",
  "coochie",
  "Dildo",
  "Dildos",
  "ejaculate",
  "ejaculated",
  "ejaculates",
  "ejaculating",
  "ejaculatings",
  "ejaculation",
  "ejakulate",
  "fagfucker",
  "fagbag",
  "fagg",
  "fagged",
  "fagging",
  "faggit",
  "faggitt",
  "faggot",
  "faggotcock",
  "faggots",
  "faggs",
  "fagot",
  "fagots",
  "fagtard",
  "footjob",
  "foreskin",
  "Hentai",
  "heroin",
  "hitler",
  "heil, hitler",
  "nazi",
  "neonazi",
  "nigaboo",
  "nigg4h",
  "niggaz",
  "niggle",
  "niglet",
  "panty",
  "pedophilia",
  "pedophiliac",
  "reetard",
  "Queffing",
  "rtard",
  "r,-tard",
  "sluts",
  "queefing",
];

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.on("ready", () => {
  client.user.setActivity("Sending Love !help");
});

client.on("guildMemberAdd", (guildMember) => {
  let welcomeRole = guildMember.guild.roles.cache.find(
    (role) => role.name === "AraMember"
  );
  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache
    .get("766724833366376511")
    .send(
      `Hey <@${guildMember.user.id}>, welcome to **Aragon's TV-station:purple_heart:**! Thank you so much for joining this lovely community :purple_heart:\n Please make sure to read <#766726649180979243> :AraLove:`
    );
});

client.on("message", (message) => {
  if (!message.author.bot) {
    if (message.content) {
      const profane = !!profanities.find((word) => {
        const regex = new RegExp(`\\b${word}\\b`, "i");
        return regex.test(message.content);
      });

      if (profane) {
        client.channels.cache
          .get(`767154622951194716`)
          .send(`*${message.author.tag}* said: **${message}**`);
        message.delete();
        return;
      }
    }
  }
});

client.on("message", async (message) => {
  if (!message.guild) return;
  if (message.author.bot) return;

  const prefix = process.env.PREFIX;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLocaleLowerCase();

  const randomXp = Math.floor(Math.random() * 9) + 1;
  const specialXp = 15;
  const hasLeveledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    randomXp
  );
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    client.channels.cache
      .get(`772243403894292491`)
      .send(
        `<@${message.author.id}>, you leveled up to ${user.level}! Keep it going!`
      );
  }

  if (command === "hug" || command === "compliment") {
    Levels.appendXp(message.author.id, message.guild.id, specialXp);
  }

  if (command === "qotdlist" || command === "ql") {
      const listArray = [];

      for (let index = 0; index < questions.length; index++) {
        listArray.push(`${index}. ${questions[index]}`);
      }

      const embed = new Discord.MessageEmbed()
      .setTitle('QOTD List')
      .setColor('#C1134E')
      .setAuthor('Aragon', 'https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
      .setThumbnail('https://cdn.discordapp.com/attachments/776531709193486377/790532643073687553/logo_Justaragon_bg_3.png')
      .setDescription(listArray)
      
      message.channel.send(embed);
  }

  if (command === "addqotd") {
    questions.push(args.join(' '));
    message.channel.send(`Added **${args.join(' ')}** to the list! Use **!qotdlist** or **!ql** to show the list`)
  }

  if (command === "deleteqotd") {
    questions.splice(args, 1);
    message.channel.send(`You deleted question number ${args}. Use **!qotdlist** or **!ql** to show the list`);
  }
});

let questions = [
  'If you could meet anyone in this world today, who would you meet?',
  'What’s the most addictive game for you?',
  'What period would you travel to if you were given a time machine?',
  'Would you rather cook or eat at a restaurant?',
  'If you could change your name for a day, what would it be?',
  'What TV series could you watch several times?',
  'What age would you prefer if you could choose any age for the rest of your life, and why?',
  'Where do you want to travel the most?',
  'On vacation, are you the relax-by-the-pool type or a get-up-and-go adventurer?',
  'What’s your favorite board game to play?',
  'What’s the best museum you’ve ever been to?',
  'Is it more important to do what you love or to Love what you are doing?',
  'Go to the theater or a movie?',
  'Do you believe in second chances?',
  'When you were a kid, what career did you want to have?',
  'Tea or coffee?',
  'What colour socks are you wearing right now?',
  'If you had a shop, what would you sell?',
  'Describe your ideal day in 10 words or less.',
  'Who is your all-time favorite Disney character?',
  'What’s the most beautiful country you’ve ever visited?',
];

let scheduledMessage = new cron.CronJob('00 00 16 * * *', () => {
  const guild = client.guilds.cache.get('766724832334970942');
  const channelQOTD = guild.channels.cache.get('875087964382842910');
  const channelMOD = guild.channels.cache.get('');

  if (questions.length === 0) {
    channelQOTD.send('Unfortunatly, there are no more questions')
  } else if (questions.length === 5) {
    channelMOD.send(`There are`, questions.length `left`);
    let randomQuestionIndex = Math.floor(Math.random() * questions.length);
    channelQOTD.send(`**${questions[randomQuestionIndex]}**`);
    questions.splice(randomQuestionIndex, 1);
    console.log(questions);
    console.log(questions.length);
  } else {
    let randomQuestionIndex = Math.floor(Math.random() * questions.length);
    channelQOTD.send(`**${questions[randomQuestionIndex]}**`);
    questions.splice(randomQuestionIndex, 1);
    console.log(questions);
    console.log(questions.length);
  }
}, null, true, 'Europe/Amsterdam');

let moderatorMessage = new cron.CronJob('00 00 20 * * Mon,Wed,Fri,Sun', () => {
  const guild = client.guilds.cache.get('766724832334970942');
  const channel = guild.channels.cache.get('838710308506959873');
  const yesEmoji = `✅`;
  const noEmoji = `❌`;
  const timeEmoji = `⏱️`;

  let day = new Date();
  let weekDay = day.toLocaleString("en-GB", { weekday: "long" })

  channel.send(`<@&838184801009270805>\n**${weekDay} Stream at 9pm CEST**\nStream starting in 1 hour.\nWill you be there to moderate? <3\n\n ${yesEmoji} Yes\n ${noEmoji} No\n ${timeEmoji} I'll be late`).then(sentMessage => {
    sentMessage.react(yesEmoji);
    sentMessage.react(noEmoji);
    sentMessage.react(timeEmoji);
  });
}, null, true, 'Europe/Amsterdam');

scheduledMessage.start();
moderatorMessage.start();

client.login(process.env.DISCORD_TOKEN);
