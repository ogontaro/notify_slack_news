import i18next from 'i18next';

const I18n = i18next
  .init({
    fallbackLng: 'ja',
    debug: true,
    resources: {
      ja: {
        translation: {
          channel_created:
            [
              'おほ～♪新しい #{{name}} を発見しましたぁ♪',
              '#{{name}} ができたの！？ ここは聖地と呼びたい！',
              '#{{name}} ができたって？ こいつぁすげぇや！',
            ],
          emoji_changed:
            {
              add: '新しい絵文字が追加されたよ→ :{{name}}: みんな使ってみて！',
              remove: '残念ながら :{{name}}: の絵文字はおなくなりになりました…',
            },
        },
      },
    },
  });

export default I18n;
