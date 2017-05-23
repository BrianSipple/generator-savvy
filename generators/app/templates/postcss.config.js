/* eslint-env node */

module.exports = function (ctx) {
  return {
    plugins: {
      // ⚠️ Order matters! PostCSS will run plugins in the order listed.
      stylelint: {},

      'postcss-import': {},

      'postcss-cssnext': {
        features: {
          customProperties: {
            preserve: true
          }
        }
      },

      // 🔑 Set `process.env.NODE_ENV` to "production" to create
      // a minified production build
      cssnano: ctx.env === 'production' ? {} : false,

      'postcss-reporter': {}
    }
  };
};
