module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, ) {
        message.channel.send("Pinging...").then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;

            m.edit(`:ping_pong: | Your Ping Is: ${ping}ms`);
        });
    }
}
