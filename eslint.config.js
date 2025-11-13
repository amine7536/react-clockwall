// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default tseslint.config(// Global ignores
{
  ignores: ['**/node_modules/**', '**/dist/**', '**/lib/**', '**/docs/**', '**/demo/**', '**/coverage/**'],
}, // Base JavaScript config
js.configs.recommended, // TypeScript configs
...tseslint.configs.recommendedTypeChecked, ...tseslint.configs.stylisticTypeChecked, // Main configuration for all files
{
  files: ['**/*.{js,jsx,ts,tsx}'],
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
      ecmaFeatures: {
        jsx: true,
      },
    },
    globals: {
      window: 'readonly',
      document: 'readonly',
      navigator: 'readonly',
      console: 'readonly',
      process: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      module: 'readonly',
      require: 'readonly',
      React: 'readonly',
    },
  },
  plugins: {
    react: reactPlugin,
    'react-hooks': reactHooksPlugin,
    'jsx-a11y': jsxA11yPlugin,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React rules
    ...reactPlugin.configs.recommended.rules,
    ...reactPlugin.configs['jsx-runtime'].rules,
    ...reactHooksPlugin.configs.recommended.rules,
    ...jsxA11yPlugin.configs.recommended.rules,

    // Custom rules from old config
    'react/jsx-no-bind': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',

    // TypeScript rules
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',

    // General rules
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
}, // Config files can use CommonJS
{
  files: ['**/*.config.{js,ts}', '**/.*.{js,ts}'],
  languageOptions: {
    globals: {
      require: 'readonly',
      module: 'readonly',
      __dirname: 'readonly',
      __filename: 'readonly',
      process: 'readonly',
    },
  },
}, // Test files specific config
{
  files: ['test/**/*.{ts,tsx}', '**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
  },
}, storybook.configs["flat/recommended"]);
