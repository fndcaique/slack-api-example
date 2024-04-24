const { WebClient } = require("@slack/web-api");

const BOT_USER_TOKEN = process.env.SLACK_BOT_KEY;
const web = new WebClient(BOT_USER_TOKEN);

class SlackService {
  postTextMessage(messageArguments) {
    return web.chat.postMessage({ ...messageArguments });
  }
  async postFile() {
    const webAPICallResult = await web.files.uploadV2({
      channel_id: 'D07080HJGJX',
      file: 'package.json',
      filename: 'package.json',
    });
    if (webAPICallResult.ok) {
      
      const file = webAPICallResult.files[0];
      return file.permalink;
    }
    return null;
  }
}

module.exports = new SlackService();