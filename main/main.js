const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
const { prefix } = require('./config.json');
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', async () => {
    client.user.setActivity(`${prefix}help | LuaExec`, { type: 'WATCHING' })
    console.log('Bot is online and up to date fully working!');
})

client.on('message', message => {
    if (message.channel.type == 'dm') return

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command == 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'rules') {
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'price') {
        client.commands.get('price').execute(message, args, Discord);
    } else if (command == 'info') {
        client.commands.get('info').execute(message, args, Discord);
    } else if (command == 'redtuto') {
        client.commands.get('redtuto').execute(message, args, Discord);
    } else if (command == 'clear') {
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if (command == 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    }
});


client.login(token)