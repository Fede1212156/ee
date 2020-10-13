const DefaultEmbed = require('./default-embed');


class StopQueueEmbed extends DefaultEmbed {
	constructor() {
		super();
		this.setTitle(' Cleared queue successfully!');
	}
}

module.exports = StopQueueEmbed;