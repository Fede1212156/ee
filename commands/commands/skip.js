const SkipSongEmbed = require('../embeds/skip-song');
const ErrorEmbed = require('../embeds/error');

//Skip Command
const skip = {
	name: 'skip',
	description: 'Skip the currently played song',
	execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		if (!message.member.voiceChannel) {
			return message.channel.send(new ErrorEmbed('You need to be in a voice channel to skip the music!'));
		}

		if (!serverQueue) {
			return message.channel.send(new ErrorEmbed('There is no song that I could skip!'));
		}

		message.channel.send(new SkipSongEmbed(serverQueue.songs[0]));
		serverQueue.connection.dispatcher.end();
	}
};


module.exports = skip;