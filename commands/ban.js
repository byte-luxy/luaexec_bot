module.exports = {
    name: 'ban',
    description: "",
    execute(message, args, Discord) {

        if (message.member.permissions.has("BAN_MEMBERS")) {

            var reason = args.slice(1).join(" ");
            const member = message.mentions.users.first();
            if (!member) {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('FAILED - MENTION MEMBER')
                    .setDescription(`
                **${message.author.username}**, you need to mention the member you want to ban.
                `)
                    .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                    .setTimestamp()
                    .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
                message.channel.send(newEmbed);
            }

            if (member) {
                const memberTarger = message.guild.members.cache.get(member.id)
                memberTarger.send(
                    new Discord.MessageEmbed()
                        .setColor('#FF3600')
                        .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                        .setTitle('BANNED FROM SERVER - DIRECT MESSAGE')
                        .setDescription(`
        You have been banned from **${message.guild.name}** by **${message.author.tag}**!
        **Reason:** ${reason || "No reason provided"}
        `)
                        .setThumbnail('https://i.imgur.com/tVenDVq.gif')
                        .setFooter(`Created by LuXy  •  This is a permanent ban and can therefore not be lifted`, 'https://i.imgur.com/tVenDVq.gif')
                ).then(() => {
                    message.guild.members.ban(memberTarger, { reason: reason || `Banned by ${message.author.tag}` }).catch(() => null)
                })
                const newEmbed = new Discord.MessageEmbed()
                    .setColor('#FF3600')
                    .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
                    .setTitle('BANNED')
                    .setDescription(`
                **<@${member.id}>** has been banned by **${message.author.tag}**
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