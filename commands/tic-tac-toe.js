const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'tic-tac-toe',
    cooldown: 10,
    description: 'play some thing',
    async execute (message, args, client){
        const opponent = message.mentions.users.first();
        if (!opponent) return message.channel.send(`:Cross: **Please mention who you want to challenge at tictactoe.**`);
        const { TicTacToe } = require('weky')
        const game = TicTacToe({
            message: message,
            opponent: opponent, // opponent
            xColor: 'red', // x's color
            oColor: 'blurple', //zero's color
            xEmoji: '❌',  //t he x emoji
            oEmoji: '🔵' ,// the zero emoji
        })
        game.start()// start da game
        return;
    }
}