const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: true, // bantu saat dev
  debug: true, // untuk melihat log
};
