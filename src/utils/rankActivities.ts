import { clamp } from './clamp';

type WeatherDay = {
  date: string;
  temperatureMax: number;
  precipitationSum: number;
  snowfallSum: number;
  windspeedMax: number;
};

type RankedDay = {
  date: string;
  activities: {
    name: string;
    score: number;
  }[];
};

export function rankActivitiesFromWeather(days: WeatherDay[]): RankedDay[] {
  return days.map(day => {
    const { date, temperatureMax: temp, precipitationSum: rain, snowfallSum: snow } = day;

    // --- Skiing (ideal: snow > 5cm, temp < 0)
    const skiSnowFactor = clamp(snow / 10, 0, 1); // full score at 10+ cm
    const skiTempFactor = clamp((5 - temp) / 10, 0, 1); // ideal if below 0
    const skiScore = Math.round(1 + 9 * skiSnowFactor * skiTempFactor);

    // --- Surfing (ideal: 15–20°C, dry, no snow)
    const surfTempFactor = clamp((temp - 10) / 10, 0, 1); // best around 20
    const surfRainPenalty = clamp(1 - rain / 5, 0, 1);
    const surfSnowPenalty = snow > 0 ? 0 : 1;
    const surfScore = Math.round(1 + 9 * surfTempFactor * surfRainPenalty * surfSnowPenalty);

    // --- Outdoor Sightseeing (ideal: dry, 15–25°C, no snow)
    const outdoorTempFactor = clamp((temp - 10) / 10, 0, 1);
    const outdoorRainPenalty = clamp(1 - rain / 3, 0, 1);
    const outdoorSnowPenalty = snow > 0 ? 0 : 1;
    const outdoorScore = Math.round(
      1 + 9 * outdoorTempFactor * outdoorRainPenalty * outdoorSnowPenalty,
    );

    // --- Indoor Sightseeing (ideal: rain or snow, temp < 10)
    const wetnessFactor = clamp((rain + snow) / 10, 0, 1);
    const indoorTempFactor = clamp((10 - temp) / 10, 0, 1);
    const indoorScore = Math.round(1 + 9 * wetnessFactor * indoorTempFactor);

    return {
      date,
      activities: [
        { name: 'Skiing', score: skiScore },
        { name: 'Surfing', score: surfScore },
        { name: 'Outdoor sightseeing', score: outdoorScore },
        { name: 'Indoor sightseeing', score: indoorScore },
      ],
    };
  });
}
