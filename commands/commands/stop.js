const StopQueueEmbed = require('../embeds/stop-queue');
const ErrorEmbed = require('../embeds/error');

//Stop Command
const stop = {
	name: 'stop',
	description: 'Stop the current song being played in the queue',
	execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		if (!serverQueue) {
			return message.channel.send(new ErrorEmbed('There\'s no song currently played or in queue'));
		}

		if (!message.member.voiceChannel) {
			return message.channel.send(new ErrorEmbed('You need to be in a voice channel to stop the music!'));
		}

		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
		message.channel.send(new StopQueueEmbed());
	}
};


module.exports = stop;