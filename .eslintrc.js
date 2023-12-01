module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'warn',
    'import/extensions': 'off',
    'arrow-parens': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/button-has-type': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-restricted-globals': 'off',
    'wrap-iife': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'max-len': 'off',
      },
    },
  ],
};
