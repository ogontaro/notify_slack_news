'use strict';

import SlackNotifier from './slack_notifier';

module.exports.notify_news = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const slackNotifier = new SlackNotifier(body);
  slackNotifier.notify();

  callback(null, {
    statusCode: 200,
    body: body.challenge,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
