import SlackNotifier from './slack_notifier';

module.exports.notify_news = (event, context, callback) => {
  const body = JSON.parse(event.body);

  if (body.event) {
    const slackNotifier = new SlackNotifier(body);
    try {
      slackNotifier.notify();
    } catch (err) {
      console.error(err);
    }
  }

  callback(null, {
    statusCode: 200,
    body: body.challenge,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
