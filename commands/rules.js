const Discord = require('discord.js');

module.exports = {
    name: 'rules',
    description: "",
    execute(message, args, Discord) {

        new Discord.MessageEmbed()
            .setColor('#ededed')
            .setTitle('Server Rules and Polices')
            .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
            .setDescription(`
        A) No chargebacking. Chargebacking will result in a permanent blacklist and a ban.
        B) No sending NSFW content on any channel unless the channel allows it.
        C) No DM'ing Staff members (Includes HWID resets open a ticket).
        D) No @ the Staff team.
        E) No sharing or selling account/key. As it will result in a blacklist and a ban.
        F) No talking about other executors.
        G) No promoting/selling/leaking of any product.
        H) Spamming messages is not allowed.
        I) Use the channels accordingly, e.g. #commands is used for commands only e.g. "$expiration"
        J) Reselling without authentication will result in a blacklist and a ban.
        K) Not allowed any fun/Don't be stupid.
        L) Creating an anticheat to block redENGINE will result in a blacklist.
        M) Do as you're told by the higher-ups.
        N) No racism.
        O) No impersonating the staff members.
        P) Disrespect to staff (insulting etc) will result in a blacklist.
        Q) No gay videos/photos etc.
        R) Server owners can't check mutual servers to ban people from their server.
`)
            .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
        message.channel.send(newEmbed);
    }
}