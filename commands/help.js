module.exports = {
    name: 'help',
    description: "",
    execute(message, args, Discord) {

        const { prefix } = require('../config.json')

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FF3600')
            .setDescription('Help commands')
            .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
            .addFields(
                { name: `${prefix}ban`, value: 'Bans desired member', inline: true },
                { name: `${prefix}tempban`, value: 'Bans member a specific amount of time', inline: true },
                { name: `${prefix}unban `, value: 'Unbans desired member', inline: true },
                { name: `${prefix}kick`, value: 'Kicks desired member', inline: true },
                { name: `${prefix}mute`, value: 'Mutes desrired member', inline: true },
                { name: `${prefix}unmute`, value: 'Unmutes desrired member', inline: true },
                { name: `${prefix}clear`, value: 'Deletes message(s)', inline: true },
                { name: `${prefix}help`, value: 'Shows all help commands', inline: true },
                { name: `${prefix}info`, value: 'Information about redENGINE', inline: true },
                { name: `${prefix}price`, value: 'Private message with all prices', inline: true },
                { name: `${prefix}redtuto`, value: 'Tutorial for redENGINE', inline: true },
                { name: `\u200B`, value: `\u200B`, inline: true },
            )
            .setTimestamp()
            .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
        message.channel.send(newEmbed);
    }
}