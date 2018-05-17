import { WebClient } from '@slack/client';
import _ from 'lodash';
import Message from './message';

export default class SlackNotifier {
  constructor(params) {
    this.web = new WebClient(process.env.SLACK_BOT_TOKEN);
    this.message = new Message(params);
  }

  async notify() {
    const text = this.message.text();
    if (!text) return;

    const [userId, channels] = [
      (await this.web.auth.test()).user_id,
      (await this.web.channels.list()).channels];

    channels
      .filter(channel => _.includes(channel.members, userId))
      .forEach(channel => this.web.chat.postMessage({ channel: channel.id, text, link_names: 1 }));
  }
}
