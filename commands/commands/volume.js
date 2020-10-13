const VolumeEmbed = require('../embeds/volume');
const ErrorEmbed = require('../embeds/error');

//Volume Command 
const volume = {
	name: 'volume',
	description: 'Change music volume',
	execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		if (!serverQueue) {
			return message.channel.send(new ErrorEmbed('There\'s no song currently played, so i couldn\'t change volume'));
		}

		const nbr = parseInt(arg, 10);
		if (!isNaN(nbr) && (nbr >= 0 && nbr <= 100)) { //Checking whether a number or not
			message.channel.send(new VolumeEmbed(serverQueue.volume * 100, nbr));
			serverQueue.volume = nbr / 100;

			const {dispatcher} = serverQueue.connection;
			if (dispatcher) {
				dispatcher.setVolumeLogarithmic(serverQueue.volume);
			}
		} else {
			message.channel.send(new ErrorEmbed('Volume must be a number between `0` and `100`!'));
		}
	}
};


module.exports = volume;