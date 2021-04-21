const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose');
require('dotenv').config()
require('./src/config/models').init

const User = mongoose.model('User');

client.on('ready', () => {
    console.log('back online again')
})
/* ToDo =>
 Criar BD do Rei
 Criar Models que comunicarão com BD do REI
*/
client.on('message', msg => {
    
    const msgarray = msg.content.split(' ')
    if(msgarray[0]==='rei!') {
        switch (msgarray[1]) {
            case 'getinvite':
                    /* ToDo => criar convite apenas se tiver mais de 5 moedas em conta. debitar as moedas do usuário */
                    const invite = msg.channel.createInvite({
                        maxUses: 1,
                        maxAge: 1800
                    });
                    invite.then(res => {
                        msg.channel.send(`<@${msg.author.id}> sua requisição foi enviada em private message.`)
                        msg.author.send(`https://discord.gg/${res.code}`)
                    })
                    /* ToDo => quando novo usuário entrar, criar conta no BD do REI */
                    break;

            case 'working':
                msg.channel.send(`Trampo Executado. Uma moeda do rei será salva em sua conta`)
                /* Todo => guardar moeda no cadastro do REI */
                break;
            default:
                msg.channel.send('nao implementado')
                break;            
        }        
    }
})

client.on('guildMemberAdd', (member) => {
    // Cria usuario ao entrar no Server
    // ToDo -> Tratar usuário que saiu do server e entrou de novo
    User.create({
        userId: member.id,
    })
    .then((value) => console.log(value))
    .catch((e)=> console.log(e))
});

client.login(process.env.TOKEN)

