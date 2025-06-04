import { createYoga, createSchema } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

const typeDefs = /* GraphQL */ `
  type WeatherDay {
    date: String!
    temperatureMax: Float!
    precipitationSum: Float!
    snowfallSum: Float!
    windspeedMax: Float!
  }

  type Query {
    getWeather(city: String!): [WeatherDay!]!
  }
`;

const resolvers = {
  Query: {
    getWeather: async (_: unknown, { city }: { city: string }) => {
      const geoRes = await fetch(`${GEO_URL}?name=${encodeURIComponent(city)}&count=1`);
      const geoData = await geoRes.json();
      const location = geoData.results?.[0];

      if (!location) throw new Error('City not found');

      const { latitude, longitude } = location;

      const weatherRes = await fetch(
        `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,precipitation_sum,snowfall_sum,windspeed_10m_max&timezone=auto`,
      );
      const data = await weatherRes.json();

      return data.daily.time.map((date: string, i: number) => ({
        date,
        temperatureMax: data.daily.temperature_2m_max[i],
        precipitationSum: data.daily.precipitation_sum[i],
        snowfallSum: data.daily.snowfall_sum[i],
        windspeedMax: data.daily.windspeed_10m_max[i],
      }));
    },
  },
};

const schema = createSchema<{ req: NextApiRequest; res: NextApiResponse }>({
  typeDefs,
  resolvers,
});

const yoga = createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: '/api/graphql',
});

export default yoga;
