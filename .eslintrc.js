module.exports = {
  root: true,
  extends: ['@react-native-community', 'standard', 'prettier','better-styled-components',],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'comma-dangle': [0],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    camelcase: ['off'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'better-styled-components/sort-declarations-alphabetically': 2,
  },
};
