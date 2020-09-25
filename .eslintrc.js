module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  env: {
    node: true,
  },
  extends: ['standard', 'prettier', 'prettier/standard'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
      },
    ],
  },
}
