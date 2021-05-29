module.exports = {
    name: 'clear',
    description: "",
    async execute(message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()

        if (message.member.permissions.has("ADMINISTRATOR")) {

            if (!args[0]) return message.channel.send(
                newEmbed
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('FAILED - ENTER MESSAGE AMOUNT')
                    .setDescription(`
            **${message.author.username}**, please enter the amount of messages that you want to clear!
            `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif')
            )

            if (isNaN(args[0])) return message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('FAILED - ENTER A REAL NUMBER')
                    .setDescription(`
        **${message.author.username}**, please enter a real number!
        `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif')
            )

            if (args[0] > 100) return message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('FAILED - UNDER 100 MESSAGES')
                    .setDescription(`
        **${message.author.username}**, you cannot delete more than 100 messages!
        `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif')
            )

            if (args[0] < 1) return message.channel.send(
                new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('FAILED - AT LEAST ONE MESSAGE')
                    .setDescription(`
        **${message.author.username}**, you must delete at least one message!
        `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif')
            )

            await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(messages);
            });

        } else {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#FF3600')
                .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                .setTitle('FAILED - NOT SUFFICIENT PERMISSION')
                .setDescription(`
**${message.author.username}**, you do not have permission to use this command.
    `)
                .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                .setTimestamp()
                .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
            message.channel.send(newEmbed);
        }

    }
}