import type { Meta, StoryObj } from '@storybook/react';
import { ActivityIcon } from './ActivityIcon';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ActivityIcon> = {
  title: 'Components/ActivityIcon',
  component: ActivityIcon,
  argTypes: {
    name: {
      control: 'select',
      options: ['Skiing', 'Surfing', 'Outdoor sightseeing', 'Indoor sightseeing'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActivityIcon>;

export const Skiing: Story = {
  args: {
    name: 'Skiing',
  },
};

export const Surfing: Story = {
  args: {
    name: 'Surfing',
  },
};

export const OutdoorSightseeing: Story = {
  args: {
    name: 'Outdoor sightseeing',
  },
};

export const IndoorSightseeing: Story = {
  args: {
    name: 'Indoor sightseeing',
  },
};

export const PlayTest: Story = {
  args: {
    name: 'Surfing',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const icon = await canvas.findByLabelText('Surfing');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveTextContent('🏄‍♂️');
  },
};
