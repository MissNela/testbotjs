const Discord = require("discord.js");

const PREFIX = config.prefix;

var bot = new Discord.Client();

bot.on("message", function(message) {
  console.log(message.content);
   
});

          
bot.login(process.env.BOT_TOKEN);

