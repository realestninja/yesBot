var token = '';
var TelegramBot = require('node-telegram-bot-api');
var bot = new TelegramBot(token, {polling: true});

//any kind of message
bot.on('message', function(json) {
  var chatId = json.chat.id;

  if (json.hasOwnProperty('text')) {
    var message = json.text;
    var lastChar = message.substr(message.length - 1)

    if (lastChar == '?') {
      bot.sendSticker(chatId, 'BQADBAADhgADgaJbBupIQEcw4qw1Ag');
    }
  }

});

console.log('bot running');