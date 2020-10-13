const MusicBot = require('./server.js');

const musicBot = new MusicBot({
  discordToken: 'NjYzMjc5MzUyMzQyOTA0ODQz.Xl9HHw.qf7pGbCDabBlp2AbC3D7OTIRsdA',
  googleKey: 'AIzaSyDj-NEI9LenNvlkIr7nfelhRYa-cw3R4mo'
});

musicBot.start();