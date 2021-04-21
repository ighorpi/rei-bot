# Rei Bot
Rei é um bot feito para gerenciar o servidor Tecnocity do discord. Com comportameto previsível e gamificado, permite interações dinâmicas entre os participantes do servidor. Veja as Funcionalidades!

## Funcionalidades
Para a boa execução das funcionalidades, é necessário

- [ ] Convidar pessoas para o servidor:  
    Você pode convidar alguem chamando o comando  
    `rei! getinvite`  
    Ao chamar o comando, será debitado 5 moedas de seu usuário. Caso você não tenha, não será gerado o convite.  
    __Cuidado ao gerar convites desnecessários, pois cada um custa moedas e duram 30 minutos_ ou até algum usuário usá-lo__
    

- [ ] Trabalho e geração de moeda:  
    Em um canal nomeado __trampo__, é possível executar ação de trabalhar  
    `rei! working`

    O Resultado deve ser o retorno de Uma moeda do rei (moeda do servidor), que ficará salvo no banco de dados da API do bot. Você pode trabalhar uma vez por dia, ganhando uma moeda por trabalho.

## Rodando na sua máquina
* NodeJS e NPM são pré-requisitos. instale em sua máquina.

1. Entre na raíz do projeto e instale as dependências  
    `npm install`

1. Preencha seu arquivo _.env_ como no _.env.example_.
    * TOKEN - Variável de ambiente que guardará o token do discord.

1. Inicie o servidor com  
    `node .`

Pronto, o bot está rodando. Agora basta usá-lo em seu servidor.

