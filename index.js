require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
const TOKEN = process.env.TOKEN;



client.on('ready', () => {
    console.info(`Logged in as ${client.user.tag}!`);
  });


client.login(TOKEN);
