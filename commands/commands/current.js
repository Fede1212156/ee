const CurrentSongEmbed = require('../embeds/current-song');
const ErrorEmbed = require('../embeds/error');


//Current Song Command
const current = {
	name: 'current',
	description: 'Display the song being played',
	async execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		if (!serverQueue) {
			return message.channel.send(new ErrorEmbed('There is no song currently playing!'));
		}

		message.channel.send(new CurrentSongEmbed(serverQueue.songs[0]));
	}
};

module.exports = current;