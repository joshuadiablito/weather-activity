import { useMemo } from 'react';
import { App, Flex, Input, Skeleton, Space, Typography } from 'antd';

import { ActivityCard } from '../components/ActivityCard';
import { ErrorAlert } from '../components/ErrorAlert';
import { useCitySearch } from '../hooks/useCitySearch';
import { useWeatherGraphQL } from '../hooks/useWeatherGraphQL';
import { rankActivitiesFromWeather } from '../utils/rankActivities';

export default function Home() {
  const { city, debouncedCity, setCity } = useCitySearch();
  const { data, error, isLoading } = useWeatherGraphQL(debouncedCity, !!debouncedCity);
  const ranked = useMemo(() => (data ? rankActivitiesFromWeather(data) : null), [data]);

  return (
    <App>
      <Space direction="vertical" size="large" style={{ padding: 24 }}>
        <Typography.Title>Weather Activity Ranker</Typography.Title>
        <form method="post" noValidate autoComplete="off">
          <Flex gap="middle">
            <Input
              value={city}
              onChange={e => setCity(e.target.value)}
              placeholder="Enter city or town"
            />
          </Flex>
        </form>
      </Space>

      {isLoading ? (
        <div data-testid="skeleton-loader" style={{ padding: 24 }}>
          <Skeleton />
        </div>
      ) : null}
      {error ? (
        <div data-testid="error-alert" style={{ padding: 24 }}>
          <ErrorAlert error={error} />{' '}
        </div>
      ) : null}

      <Space direction="vertical" size="large" style={{ padding: 24 }}>
        {ranked ? (
          <Flex wrap gap="middle">
            {ranked.map((day, index) => (
              <ActivityCard key={index} data={day} />
            ))}
          </Flex>
        ) : null}
      </Space>
    </App>
  );
}
