var token = '';
var process = require('process');
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(token, {polling: true});
var stickerToSend = 'BQADBAADhgADgaJbBupIQEcw4qw1Ag';

//any kind of message
bot.on('message', function(json) {
  var chatID = json.chat.id;

  if (json.hasOwnProperty('text')) {
    var message = json.text;
    var lastChar = message.substr(message.length - 1)

    if (lastChar === '?') {
      bot.sendSticker(chatID, stickerToSend);
    }
  }
});

console.log('bot running - pid: ' +  process.pid);
