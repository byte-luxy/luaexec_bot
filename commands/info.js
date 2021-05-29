module.exports = {
    name: 'info',
    description: "",
    execute(message, args, Discord) {

        const newEmbed = new Discord.MessageEmbed()
            .setColor('#FF3600')
            .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
            .setDescription(`
> **Private Message in DMs**
> <@${message.author.id}>
`)
            .setThumbnail('https://i.imgur.com/tVenDVq.gif')
            .setTimestamp()
            .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
        message.channel.send(newEmbed);


        const Embed = new Discord.MessageEmbed()
            .setColor('#FF3600')
            .setThumbnail('https://i.imgur.com/tVenDVq.gif')
            .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
            .setDescription('redENGINE is a Lua executor for FiveM that allows you to execute Lua code or scripts clientside.\n\n')
            .addFields(
                { name: 'The Safe Solution', value: "We always make sure our tool is safe to use, and that it's updated. That means we do all the worrying for you, by testing it to great lengths, so that you can just sit back, enjoy and relax." },
                { name: 'The Best Quality', value: "redENGINE has always been about providing the best quality available for the consumer. We do this by spending a lot of time on developing new features and by putting our customer's suggestions into practice." },
                { name: 'Value For Your Money', value: "Are you tired of paying too much for something that does not work as advertised? We always deliver what we advertise, unlike other providers. That means we have squeezed the prices down, while the quality remains the best." },
                { name: 'Your All In One Solution', value: "redENGINE has so many features and functions that you will never get bored using our tool. There is always something new to try, while we also introduce updates that contain your favorite features." }
            )
            .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
        message.member.send(Embed);
    }

}