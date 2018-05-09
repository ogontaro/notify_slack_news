import i18next from 'i18next';

const I18n = i18next
  .init({
    fallbackLng: 'ja',
    debug: true,
    resources: require("../config/locales/shiro.yml")
  });

export default I18n;
