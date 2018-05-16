import { WebClient } from '@slack/client';
import _ from 'lodash';
import Message from './message';

export default class SlackNotifier {
  constructor(params) {
    this.web = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.message = new Message(params);
  }

  notify() {
    const text = this.message.text();
    if (!text) return;

    this.web.auth.test()
      .then((auth) => {
        this.web.channels.list()
          .then((channelInfo) => {
            channelInfo.channels
              .filter(channel => _.includes(channel.members, auth.user_id))
              .forEach((channel) => {
                this.web.chat.postMessage({ channel: channel.id, text, link_names: 1 })
                  .then((res) => {
                    console.log('Message sent: ', res.ts);
                  })
                  .catch(console.error);
              });
          }).catch(console.error);
      })
      .catch(console.error);
  }
}
