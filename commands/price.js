module.exports = {
    name: 'price',
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
            .setDescription(`
        **Here are the prices of the redENGINE Executor**
\`\`\`Lifetime : €39,99
Monthly  : €19.99
Weekly   : €9.99\`\`\`
**Here are the prices of additionel menus. There is no obligation to purchase them. But it is mandatory to have redENGINE.**

**Absolute Menu**
\`\`\`Lifetime : €29,99
Monthly  : €14.99
Weekly   : €9.99\`\`\`
**Lumia Menu**
\`\`\`Lifetime : €29,99
Monthly  : €14.99
Weekly   : €9.99\`\`\`
**FiveSense Menu - COMING SOON**
\`\`\`Lifetime : €29,99
Monthly  : €14.99
Weekly   : €9.99\`\`\`
**My Sellix:**
https://sellix.io/n0tLuXy

**Payment methods accepted on my Sellix:
<:PayPal:843881143291609088> PayPal/ <:VISA:843881176574066688> VISA/ <:MasterCard:843881242071269386> MasterCard**

**My other payment methods:
<:BTC:843881306701037598> Bitcoin/ <:Ethereum:843881332610170930> Ethereum/ <:Litecoin:843881366084911136> Litecoin
If you choose one of these, DM <@415177964481937458>**
`)
            .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
            .addFields()
            .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
        message.member.send(Embed);
    }
}