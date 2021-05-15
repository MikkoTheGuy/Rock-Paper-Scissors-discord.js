module.exports = {
	name: 'play',
	description: 'start the game',
	execute(message) {
		prefix = "!"
		const args = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args.shift().toLowerCase();
        const acceptedReplies = ['r', 'p', 's'];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}play <r (rock)|p (paper)|s (scissors)>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        
        if (result === choice) return message.reply("It's a tie! We had the same choice.");
        
        switch (choice) {
            case 'r': {
                if (result === 'paper') return message.reply('I won! i choose paper!');
                else return message.reply('You won! :(');
            }
            case 'p': {
                if (result === 'scissors') return message.reply('I won! i choose scissors!');
                else return message.reply('You won! :(');        
            }
            case 's': {
                if (result === 'rock') return message.reply('I won! i choose rock');
                else return message.reply('You won! :(');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
            }
        }
    },
};
