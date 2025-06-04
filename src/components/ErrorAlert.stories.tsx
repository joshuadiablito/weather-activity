import type { Meta, StoryObj } from '@storybook/react';
import { ErrorAlert } from './ErrorAlert';

const meta: Meta<typeof ErrorAlert> = {
  title: 'Components/ErrorAlert',
  component: ErrorAlert,
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'text',
      description: 'Error object or string to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ErrorAlert>;

export const Default: Story = {
  args: {
    error: 'Something unexpected occurred.',
  },
};

export const WithErrorObject: Story = {
  args: {
    error: new Error('Server not reachable'),
  },
};

export const NoError: Story = {
  args: {
    error: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'Returns `null` when no error is passed.',
      },
    },
  },
};
