import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx)'],

  addons: ['@storybook/addon-links'],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
};

export default config;
