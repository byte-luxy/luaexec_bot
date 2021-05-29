module.exports = {
    name: 'redtuto',
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
            .setTitle('redENGINE Tutorial')
            .setAuthor('LuaExec BOT', 'https://i.imgur.com/tVenDVq.gif')
            .addFields(
                { name: 'Executor tab:', value: "Inject any Lua code. You can also click on the `(Execute from file)` button to navigate to a Lua file on your computer that you want to run `(I advise placing this file in your C drive at the root)`" },
                { name: 'ASI:', value: "In the RedEngine setting you can activate scripthook Bypass which allows to launch ASI menu such as Menyoo.. for the operation of these menus you must place in plugins in the Fivem folder which normally has this location `C:/Users/YOU/AppData/Local/FiveM/FiveM.app/plugins`" },
                { name: 'Dumper:', value: "The dumper shows you the client-side resources that you can browse. You also have the possibility to click on `(Save all resources)` the dumps can be found under `C:/redENGINE`" },
                { name: 'Triggers:', value: "This allows you to find all the triggers on a server automatically, so you don't have to dump a server. Select the trigger you want to click on `Copy go to executor and do control + v, Execute` What is it for concretely, for example, it is like for money or an items...." },
                { name: 'Event blocker:', value: "This prevents the Event from being called. An example is esx_dmvschool: addLicense. Use https://docs.fivem.net/docs/scripting-manual/working-with-events/ as an example event used." },
                { name: 'Resource stopper:', value: "A very good function you can stop a resource, so you can stop the anticheats or a script `(use with care as it can be detected by some anticheats)`" },
                { name: 'Safe Mode:', value: "This feature is enabled by default in the redENGINE settings. This feature `creates an isolated state`, which designed for a fully isolated scripting environment. `This allows bypassing almost all anticheats to be left enabled.`" },
                { name: 'Menus:', value: "This allows you to run free menus which are directly in the Menus tab. Premium menus are also displayed here if you have one" }
            )
            .setImage('https://i.imgur.com/Zuf8Roe.gif')
            .setFooter('Created by LuXy', 'https://i.imgur.com/tVenDVq.gif');
        message.member.send(Embed);
    }

}