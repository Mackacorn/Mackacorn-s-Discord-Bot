const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
        if(message.content == 'ping') {
            message.reply('pong');
            //message.channel.sendMessage('pong');
         }    
    
    });

    bot.on('message', (message) => {
        
            if(message.content == 'i need life advice') {
                message.reply('end it all');
             }    
        
        });
        
bot.login('MzcwMjU1ODYzNzExMDA2NzIz.DMlLyw.6D01QwJEf1-4rq8tAMuTzyYTHjs');
