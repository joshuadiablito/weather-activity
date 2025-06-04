import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { ActivityCard } from './ActivityCard';
import type { ActivityName } from './ActivityIcon';

const meta: Meta<typeof ActivityCard> = {
  title: 'Components/ActivityCard',
  component: ActivityCard,
};

export default meta;

type Story = StoryObj<typeof ActivityCard>;

const sampleData = {
  date: '2025-06-04',
  activities: [
    { name: 'Skiing' as ActivityName, score: 2 },
    { name: 'Surfing' as ActivityName, score: 7 },
    { name: 'Outdoor sightseeing' as ActivityName, score: 9 },
    { name: 'Indoor sightseeing' as ActivityName, score: 3 },
  ],
};

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const PlayTests: Story = {
  args: {
    data: sampleData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('📅 2025-06-04')).toBeInTheDocument();
    await expect(canvas.getByText('Skiing')).toBeInTheDocument();
    await expect(canvas.getByText('7/10')).toBeInTheDocument();
  },
};
