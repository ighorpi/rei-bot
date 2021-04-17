const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.on('ready', () => {
    console.log('back online again')
})

client.on('message', msg => {
    const msgarray = msg.content.split(' ')
    if(msgarray[0]==='rei!') {
        switch (msgarray[1]) {
            case 'getinvite':
                    const invite = msg.channel.createInvite({
                        maxUses: 1,
                        maxAge: 1800
                    });
                    invite.then(res => {
                        msg.channel.send(`<@${msg.author.id}> sua requisição foi enviada em private message.`)
                        msg.author.send(`https://discord.gg/${res.code}`)
                    })
                break;
            default:
                msg.channel.send('nao implementado')
                break;
        }
    }
})

client.login(process.env.TOKEN)

