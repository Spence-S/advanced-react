module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'import/no-unresolved': [2, { caseSensitive: false }],
    'no-console': 'off',
  },
};
