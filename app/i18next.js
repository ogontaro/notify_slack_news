/* eslint-disable import/no-dynamic-require */
import i18next from 'i18next';

const locale = require(`../config/locales/${process.env.AI_NAME}.yml`);
const I18n = i18next
  .init({
    fallbackLng: 'ja',
    debug: true,
    resources: locale,
  });

export default I18n;
