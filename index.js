// index.js
import TelegramBot from 'node-telegram-bot-api';

// 1️⃣ Create the bot, using the token you got from BotFather
const bot = new
TelegramBot(process.env.7830362374:AAFOajOhiKp4XMw9iIq6BewtdioYh6Q6T4o, {
  polling: true,
});

// 2️⃣ (Optionally) Handle other commands
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome! Tap the “Connect TON Wallet” button in the menu.');
});

// 3️⃣ Here’s where you put your web_app_data handler:
bot.on('message', (msg) => {
  if (msg.web_app_data) {
    const userAddress = msg.web_app_data.data;
    bot.sendMessage(
      msg.chat.id,
      `✅ Your TON address is: <code>${userAddress}</code>`,
      { parse_mode: 'HTML' }
    );
    // Now you can:
    // • store userAddress in your database
    // • call a TON RPC to fetch balances
    // • prepare transactions for the user to sign, etc.
  }
});
