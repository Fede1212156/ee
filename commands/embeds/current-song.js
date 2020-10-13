const PlaySongEmbed = require('./play-song');


class CurrentSongEmbed extends PlaySongEmbed {
	constructor(song) {
		super(song);
		this.setTitle(':notes: Currently playing =>');
	}
}

module.exports = CurrentSongEmbed;