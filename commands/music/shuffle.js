const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

module.exports = class ShuffleQueueCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shuffle',
      memberName: 'shuffle',
      group: 'music',
      description: 'Shuffle the song queue',
      guildOnly: true
    });
  }
   async run(message) {
  message.author.send("IF YOU WANT TO USE THIS COMMAND THEN YOU HAVE TO BUY PRO CODES - **CONTACT MYBOT WARRIOR TO BUY** https://discord.gg/mfyWmAX");
  message.channel.send("Check your Dm");
  }
}