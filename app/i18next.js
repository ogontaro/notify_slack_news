import i18next from 'i18next';

const I18n = i18next
  .init({
    fallbackLng: 'ja',
    debug: true,
    resources: require(`../config/locales/${process.env.AI_NAME}.yml`)
  });

export default I18n;
