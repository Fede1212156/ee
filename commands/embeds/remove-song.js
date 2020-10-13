const PlaySongEmbed = require('./play-song');


class RemoveSongEmbed extends PlaySongEmbed {
	constructor(song) {
		super(song);
		this.setTitle(':scissors: Removed');
	}
}

module.exports = RemoveSongEmbed;