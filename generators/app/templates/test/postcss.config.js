/* eslint-env node */

const path = require('path');

module.exports = {
  use: [
    'stylelint',
    'postcss-import',
    'postcss-cssnext',
    'postcss-reporter'
  ],

  stylelint: {
    configFile: path.join(__dirname, '../stylelint.config.js')
  },

  'postcss-reporter': {
    clearAllMessages: true,
    throwError: true,
    plugins: [
      'stylelint'
    ]
  }
};
