module.exports = {
    name: 'kick',
    description: "",
    async execute(message, args, Discord) {

        if (message.member.permissions.has("KICK_MEMBERS")) {

            var reason = args.slice(1).join(" ");
            const member = message.mentions.users.first();
            if (!member) {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('FAILED - MENTION MEMBER')
                    .setDescription(`
                **${message.author.username}**, you need to mention the member you want to kick.
                `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
                message.channel.send(newEmbed);
            }

            if (member) {
                const memberTarget = await message.guild.members.fetch(member.id)
                memberTarget.send(
                    new Discord.MessageEmbed()
                        .setColor('#FF3600')
                        .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                        .setTitle('KICKED FROM SERVER - DIRECT MESSAGE')
                        .setDescription(`
        You have been kicked from **${message.guild.name}** by **${message.author.tag}**!
        **Reason:** ${reason || "No reason provided"}
        `)
                        .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                        .setFooter(`Created by LuXy  •  This was a warning in the form of a kick`, 'https://i.imgur.com/tVenDVq.gif'));
                memberTarget.kick();


                const newEmbed = new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('KICKED')
                    .setDescription(`
                **<@${member.id}>** has been kicked by **${message.author.tag}**
                **Reason:** ${reason || "No reason provided"}
                `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
                message.channel.send(newEmbed);
            }

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