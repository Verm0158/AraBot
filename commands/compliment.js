module.exports = {
    name: 'compliment',
    description: "Notifies a person with a compliment",
    execute(message, args, cmd, client, Discord) {
        function getUserFromMention(mention) {
            if (!mention) return;

            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);

                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }

                return client.users.cache.get(mention);
            }
        }

        function randomMessage() {
            const sentenceArray = [
                'You’re pretty cool',
                'You’re epic!',
                'You’re amazing!',
                'You’re talented!', 
                'You’re breathtaking!',
                'You’re worthy!',
                'I appreciate you!!',
                'You are beautiful!',
                'Thanks for being you!',
                'Thank you for existing!',
                'You’re cute <3',
                'You’re the best!',
                'You’re wonderful!!',
                'You look beautiful!',
                'You’re awesome!!',
                'You’re fantastic!',
                'You’re an awesome friend.',
                'I like your style <3',
                'You’re strong.',
                'I’m inspired by you.',
                'You’re a candle in the darkness.',
                'You’re a great example to others.',
                'Being around you is like being on a happy little vacation.',
                'You’re so thoughtful.',
                'Any team would be lucky to have you on it.',
                'You’re someone’s reason to smile.',
                'Thank you for being you.',
                'You’re more fun than bubble wrap.',
                'You’re like a breath of fresh air.',
                'Thank you for being you.',
                'I bet you sweat glitter.',
                'You’re more helpful than you realize.', 
                'You’re better than a triple-scoop ice cream cone with sprinkles.',
                'If you were a box of crayons, you’d be the big industrial name-brand one with a built-in sharpener.',
                'Somehow you make time stop and fly all at the same time.',
                'In high school, I bet you were voted "most likely to continue being awesome."',
                'Hanging out with you is always fun.',
                'Being around you makes everything better.',
                'You should be thanked more often. Thank you.',
                'Our community is better because you’re in it.',
                'You have the best ideas.',
                'If someone based an Internet meme on you, it would have impeccable grammar.',
                'You could survive a zombie apocalypse.',
                'Your creative potential seems limitless.',
                'I bet you do crossword puzzles in ink.',
                'You have a good head on your shoulders.',
                'Everyone gets knocked down sometimes; only people like you get back up again and keep going.',
                'You are one of the strongest people I know.',
                'You look great today.',
                'You have the best smile.',
                'You just light up the room.',
                'You make a bigger impact than you realize.',
                'You are always so helpful.',
                'You have the best laugh.',
                'I appreciate our friendship.',
                'You just glow.',
                'I love the way you bring out the best in people.',
                'You bring out the best in the rest of us.',
                'You inspire me.',
                'Nothing can stop you.',
                'You just made my day.',
                'You make me float up like I’m on millions of bubbles.',
                'You are an excellent friend.',
                'I am a better person because of you.',
                'You have taught me so much.',
                'I like the way you are.',
                'You have the best sense of humor.',
                'You are one of the bravest people I know.',
                'You are so trustworthy; I always believe what you say.',
                'Everything seems brighter when you are around.',
                'I know that you will always have my back, because that is the kind of person you are.',
                'You are a great example to others.',
                'I Look up to you!',
                'you make my life better',
                'I love you!',
                'You are wholesome!! ',
                'You make me smile!',
                'You make me happy',
                'You deserve everything',
                'You are better than chocolate dipped strawberries. ',
                'You are cuter than georgenotfound.',
                'You are cool!',
                'You make me blush.',
                'I love you more than tommyinnit',
                'I- you just blew my mind away ur so pretty',
                'You matter!',
            ];
            const randomSentence = Math.floor(Math.random() * sentenceArray.length)
            return sentenceArray[randomSentence];
        }
        
        if (args[0]) {
            const user = getUserFromMention(args[0]);
            if (!user) {
                return message.reply('please use a proper mention if you want to compliment someone.');
            }

            const random = randomMessage();

            return message.reply(`you complimented ${user} :purple_heart:! ${random}`)
        }
    }
}