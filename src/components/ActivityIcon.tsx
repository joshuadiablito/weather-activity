import React from 'react';

export type ActivityName = 'Skiing' | 'Surfing' | 'Outdoor sightseeing' | 'Indoor sightseeing';

type ActivityIconProps = {
  name: ActivityName;
  className?: string;
};

export const ActivityIcon = ({ name, className = '' }: ActivityIconProps) => {
  const emojiMap: Record<ActivityName, string> = {
    Skiing: '🎿',
    Surfing: '🏄‍♂️',
    'Outdoor sightseeing': '🏞️',
    'Indoor sightseeing': '🖼️',
  };

  return (
    <span role="img" aria-label={name} className={className}>
      {emojiMap[name]}
    </span>
  );
};
