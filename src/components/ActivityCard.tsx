import { Card, List, Typography } from 'antd';
import React from 'react';

import { ActivityIcon, ActivityName } from './ActivityIcon';

type Props = {
  data: {
    date: string;
    activities: { name: string; score: number }[];
  };
};

export const ActivityCard = ({ data }: Props) => (
  <Card>
    <Typography.Title level={3}>📅 {data.date}</Typography.Title>
    <List
      itemLayout="horizontal"
      dataSource={data.activities}
      renderItem={activity => (
        <List.Item>
          <List.Item.Meta
            avatar={<ActivityIcon name={activity.name as ActivityName} />}
            title={activity.name}
            description={`${activity.score}/10`}
          />
        </List.Item>
      )}
    />
  </Card>
);
