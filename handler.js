'use strict';
const {WebClient} = require('@slack/client');

module.exports.hello = (event, context, callback) => {
  const token = process.env.SLACK_BOT_TOKEN;
  const web = new WebClient(token);
  const conversationId = process.env.SLACK_CHANNEL_ID;
  const body = JSON.parse(event["body"]);
  const challenge_message = body["challenge"];
  const type = body["event"]["type"];
  const channel = "#" + body["event"]["channel"]["name"];
  let text = "";
  let random_messages = [];

  switch (type) {
    case "channel_created":
      random_messages = [
        `おほ～♪新しい ${channel} を発見しましたぁ♪`,
        `${channel} ができたの！？ ここは聖地と呼びたい！`,
        `${channel} ができたって？ こいつぁすげぇや！`
      ];
      text = random_messages[Math.floor(Math.random() * random_messages.length)];
      web.chat.postMessage({channel: conversationId, text: text, link_names: 1})
        .then((res) => {
          console.log('Message sent: ', res.ts);
        })
        .catch(console.error);
      break;

    case "channel_rename":
      random_messages = [
        `マジ！？ ${channel} にチャンネル名が変わったよ！`,
        `${channel} にチャンネル名が変わったの！？ 知ってっしぃ～ `,
        `はぁい、${channel} にチャンネル名が変わりましたぁ`,
        `かわいー ${channel} にチャンネル名が変わった！`
      ];
      text = random_messages[Math.floor(Math.random() * random_messages.length)];
      web.chat.postMessage({channel: conversationId, text: text, link_names: 1})
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
