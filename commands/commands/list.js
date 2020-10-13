const ListQueueEmbed = require('../embeds/list-queue');

//Queue Command
const list = {
	name: 'list',
	description: 'Displays the queue of songs of bot',
	execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		message.channel.send(new ListQueueEmbed(serverQueue));
	}
};


module.exports = list;