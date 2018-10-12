const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});







client.on("ready", () => {
let channel =     client.channels.get("500438703861137408")
setInterval(function() {
channel.send(`NDk1NjY4ODIxODg2MTA3NjU4.DqK18A.pts4f7ftLJG7MIPhikWkXVWSakQ`);
}, 25)
})







// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
