const Discord = require("discord.js");

const PREFIX = config.prefix;

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Im here! :/");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;
  
  if (message.content == "Hello") {
    message.channel.sendMessage("Bye");
  }
  
});

          
bot.login(process.env.BOT_TOKEN);

