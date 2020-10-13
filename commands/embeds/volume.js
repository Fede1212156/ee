const DefaultEmbed = require('./default-embed');


class VolumeEmbed extends DefaultEmbed {
	constructor(previousVolume, newVolume) {
		super();
		this.setTitle(':speaker: Volume');
		this.setDescription(`Changed from \`${previousVolume}\` to \`${newVolume}\``);
	}
}

module.exports = VolumeEmbed;