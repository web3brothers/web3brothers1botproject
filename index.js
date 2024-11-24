require('dotenv').config();
const TelegramApi = require("node-telegram-bot-api");
const { gameOptions, againOptions } = require("./options");

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
    throw new Error('TELEGRAM_BOT_TOKEN is not defined in environment variables');
}
const bot = new TelegramApi(token, { polling: true });
const chat = {};


startGame = async (chatId) => {
    await bot.sendMessage(chatId, "Let's play a game, 0-9");
    const randomNumber = Math.floor(Math.random() * 10);
    chat[chatId] = `${randomNumber}`;
    await bot.sendMessage(chatId, `Guess the number from 0 to 9`, gameOptions);
}


const startBot = () => {
    
bot.setMyCommands([
    { command: "/start", description: "Start bot" },
    { command: "/info", description: "Info about you" },
    { command: "/game", description: "Play a game" },
  ]);
  
  
  bot.on("message", async msg => {
    console.log(msg);
    const text = msg.text;
    const chatId = msg.chat.id;
  
  
    if (text === "/start") {
      await bot.sendSticker(chatId, "CAACAgIAAxkBAAMLZ0NWss4F_a5igE03_aJfGx6gV3gAAtwVAAKqtKFJ3HqvxJcwsQI2BA");
      return bot.sendMessage(chatId, "Welcome to the bot");
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Your name is ${msg.from.first_name} ${msg.from.last_name}`
      );
    }
    if (text === "/game") {
      return startGame(chatId);
    }

    return bot.sendMessage(chatId, "I don't understand you, sorry");

  });

  bot.on("callback_query", async msg => {
    console.log(msg);
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === "/again") {
        return startGame(chatId);
    }

    if (data === chat[chatId]) {
      return bot.sendMessage(chatId, `You guessed the number ${chat[chatId]}`, againOptions);
    } else {
      return bot.sendMessage(chatId, `You didn't guess the number ${chat[chatId]}, you chose ${data}`, againOptions);
    }
  });

};

startBot();
