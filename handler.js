'use strict';
const { WebClient } = require('@slack/client');

module.exports.hello = (event, context, callback) => {
  const token = process.env.SLACK_BOT_TOKEN;
  const web = new WebClient(token);
  const conversationId = process.env.SLACK_CHANNEL_ID;
  const body = JSON.parse(event["body"]);
  const challenge_message = body["challenge"];
  const type = body["type"];

  switch (type) {
    case "channel_rename":
      const channel = "#"+body["channel"]["name"];
      const random_messages = [
        `おほ～♪ 新しいチャンネル ${channel} ができたよー`,
        `${channel} ができたか。ここは聖地と呼びたい`,
        `${channel} ができたって？ こいつぁすげぇや！`,
        `${channel} ができたよ！シロちょっとチャンネル通知の才能あるかも♪`
      ];
      console.log(random_messages.length);
      console.log( Math.floor(Math.random() * random_messages.length) );
      let text = random_messages[Math.floor(Math.random() * random_messages.length)];
      web.chat.postMessage({ channel: conversationId, text: text, link_names: 1 })
        .then((res) => {
          console.log('Message sent: ', res.ts);
        })
        .catch(console.error);
      break;
  }

  const response = {
    statusCode: 200,
    body: challenge_message,
    headers: {
      "Content-Type": "text/plain"
    }
  };

  callback(null, response);
};
