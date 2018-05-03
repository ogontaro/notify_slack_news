import { WebClient } from '@slack/client';

export default class SlackNotifier {
  constructor(params) {
    this.params = params;
    const token = process.env.SLACK_BOT_TOKEN;
    this.web = new WebClient(token);
    this.conversationId = process.env.SLACK_CHANNEL_ID;
  }

  notify() {
    const type = this.params.event.type;
    const channel = `#${this.params.event.channel.name}`;
    let text = '';
    let random_messages = [];

    switch (type) {
      case 'channel_created':
        random_messages = [
          `おほ～♪新しい ${channel} を発見しましたぁ♪`,
          `${channel} ができたの！？ ここは聖地と呼びたい！`,
          `${channel} ができたって？ こいつぁすげぇや！`,
        ];
        text = random_messages[Math.floor(Math.random() * random_messages.length)];
        this.web.chat.postMessage({ channel: this.conversationId, text, link_names: 1 })
          .then((res) => {
            console.log('Message sent: ', res.ts);
          })
          .catch(console.error);
        break;

      case 'channel_rename':
        random_messages = [
          `マジ！？ ${channel} にチャンネル名が変わったよ！`,
          `${channel} にチャンネル名が変わったの！？ 知ってっしぃ～ `,
          `はぁい、${channel} にチャンネル名が変わりましたぁ`,
          `かわいー ${channel} にチャンネル名が変わった！`,
        ];
        text = random_messages[Math.floor(Math.random() * random_messages.length)];
        this.web.chat.postMessage({ channel: this.conversationId, text, link_names: 1 })
          .then((res) => {
            console.log('Message sent: ', res.ts);
          })
          .catch(console.error);
        break;
    }
  }
}

