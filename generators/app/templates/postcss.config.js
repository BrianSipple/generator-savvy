/* eslint-env node */
module.exports = {
  use: [
    // ⚠️ Order matters! PostCSS will run plugins in the order listed.
    'stylelint',
    'postcss-import',
    'postcss-cssnext'
  ]
};
