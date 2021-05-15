module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        const Discord = require('discord.js');   
        

        // inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#FFEF00')
            .setTitle('Ping? Pong!')
            .addFields(
                {name: '🏓 Your ping', value: `${message.createdTimestamp - Date.now()}ms` },
            )
            .setTimestamp()
            .setFooter('RPS BOT');
        
        message.channel.send(exampleEmbed);
    }
}