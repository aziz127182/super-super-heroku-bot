const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag} !`);
  client.user.setGame(`Hi Im Streaming !`,`www.twitch.tv/v5bz`);
});
client.login(process.env.BOT_TOKEN);
