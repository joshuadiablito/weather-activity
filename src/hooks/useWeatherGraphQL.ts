import { useQuery } from '@tanstack/react-query';

type WeatherDay = {
  date: string;
  temperatureMax: number;
  precipitationSum: number;
  snowfallSum: number;
  windspeedMax: number;
};

async function fetchWeatherGraphQL(city: string): Promise<WeatherDay[]> {
  const query = `
    query GetWeather($city: String!) {
      getWeather(city: $city) {
        date
        temperatureMax
        precipitationSum
        snowfallSum
        windspeedMax
      }
    }
  `;

  const res = await fetch('/api/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables: { city } }),
  });

  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);

  return json.data.getWeather;
}

export function useWeatherGraphQL(city: string, enabled: boolean) {
  return useQuery({
    queryKey: ['weather-graphql', city],
    queryFn: () => fetchWeatherGraphQL(city),
    enabled,
  });
}
