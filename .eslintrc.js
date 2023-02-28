module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ['prettier', '@typescript-eslint',"react", "react-hooks"],
  rules: {
    'no-underscore-dangle': [2, {allow: ['_someString', '__someString','__REDUX_DEVTOOLS_EXTENSION__']}],
    // "no-underscore-dangle": 'off',
    'no-console': ['warn'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js','.jsx','.ts','.tsx']
      }
    }
  }
};
