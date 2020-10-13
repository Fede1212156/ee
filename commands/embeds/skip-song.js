const PlaySongEmbed = require('./play-song');

class SkipSongEmbed extends PlaySongEmbed {
	constructor(song) {
		super(song);
		this.setTitle(':track_next: Skipped');
	}
}

module.exports = SkipSongEmbed;