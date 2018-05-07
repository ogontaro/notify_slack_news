'use strict';

import {WebClient} from '@slack/client';
import Message from "./message"

export default class SlackNotifier {
  constructor(params) {
    this.web = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.conversationId = process.env.SLACK_CHANNEL_ID;
    this.message = new Message(params);
  }

  notify() {
    let text = this.message.text();
    if (!text) return;

    this.web.chat.postMessage({channel: this.conversationId, text: text, link_names: 1})
      .then((res) => {
        console.log('Message sent: ', res.ts);
      })
      .catch(console.error);
  }
}

