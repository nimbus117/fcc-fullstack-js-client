module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'import'],
  rules: {
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
