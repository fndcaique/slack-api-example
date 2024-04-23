const { WebClient } = require("@slack/web-api");

const BOT_USER_TOKEN = process.env.SLACK_BOT_KEY;
const web = new WebClient(BOT_USER_TOKEN);

class SlackService {
  postTextMessage(messageArguments) {
    web.chat.postMessage(messageArguments);
  }
}

module.exports = new SlackService();