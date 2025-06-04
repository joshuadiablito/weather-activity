import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Home from '../pages/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from 'antd';

const meta: Meta<typeof Home> = {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => {
      const queryClient = new QueryClient();
      return (
        <QueryClientProvider client={queryClient}>
          <App>
            <Story />
          </App>
        </QueryClientProvider>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  name: 'Default',
};
