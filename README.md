# Telegram Bot Project

A Telegram bot built with Node.js that implements interactive game functionality.

## Prerequisites

Before running this bot, make sure you have:
- Node.js (v12 or higher)
- npm (Node Package Manager)
- A Telegram Bot Token (obtain from [@BotFather](https://t.me/BotFather))

## Installation

1. Clone the repository:
2. Install dependencies:
3. Create a `.env` file in the root directory and add your Telegram bot token:

## Running the Bot

### Development mode
To run the bot with automatic restart on file changes:
```bash
npm run dev
```

### Production mode
To run the bot in production:
```bash
npm start
```

## Features

- Interactive game functionality
- Command handling
- [Add other features your bot implements]

## Available Commands

- `/start` - Start the bot
- `/info` - Get information
- `/game` - Start a new game
[Add other commands your bot supports]

## Project Structure

```
├── index.js          # Main bot file
├── options.js        # Game options configuration
├── package.json      # Project dependencies
└── .env             # Environment variables (not in repo)
```

## Environment Variables

The following environment variables are required:

- `TELEGRAM_BOT_TOKEN`: Your Telegram bot token
