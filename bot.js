

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
