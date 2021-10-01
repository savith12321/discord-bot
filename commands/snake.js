const { Client, Message, MessageEmbed } = require('discord.js');
const SnakeGame = require('snakecord');
module.exports = {
    name: 'snake',
    cooldown: 3,
    description: 'play snake',
    async execute (message, args, client){
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "BLUE",
            timestamp: true,
            gameOverTitle: "Game Over"
        });
        return snakeGame.newGame(message);
    }
}