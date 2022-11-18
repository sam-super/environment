module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'body-max-line-length': [2, 'always', 130],
  },
};
