const PlaySongEmbed = require('./play-song');


class AddSongEmbed extends PlaySongEmbed {
	constructor(song) {
		super(song);
		this.setTitle(':hourglass: Added to queue');
	}
}

module.exports = AddSongEmbed;