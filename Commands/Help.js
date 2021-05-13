const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Opens the help embed',
	execute(message) {
	const exampleEmbed = new Discord.MessageEmbed()
	.setColor('Black')
	.setAuthor('Help!', 'https://i.ibb.co/DK7KY45/icon.png')
	.setThumbnail('https://cdn.dribbble.com/users/563721/screenshots/3195537/help_02.gif')
	.addFields(
		{ name: '!Help', value: 'shows this' },
		{ name: '!Ping', value: 'ping? pong!' },
		{ name: '!Play', value: 'COMING SOON' },
	)
	.setTimestamp()
	.setFooter('RPS BOT');

	message.channel.send(exampleEmbed);
	},
};