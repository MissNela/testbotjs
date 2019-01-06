const Discord = require('discord.js');
const { Client, Util} = require('discord.js');
const config = require("./config.json");
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const client = new Client({ disableEveryone: true});

const youtube = new YouTube(config.GOOGLE_API_KEY);
const PREFIX = config.prefix;

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('I am ready!'));


client.on('message', function(message) {
  if (message.author.equals(client.user)) return;
  
  if (!message.content.startsWith(PREFIX)) return;
  
  var args = message.content.substring(PREFIX.elngth).split(" ");
  
  switch (args[0].toLowerCase()) {
      case "ping":
          message.channel.sendMessage("Pong! :ping_pong:");
          break;
      default:
          message.channel.sendMessage("Invaild command! Try using M]help!")
  }
});


client.login(process.env.BOT_TOKEN);
