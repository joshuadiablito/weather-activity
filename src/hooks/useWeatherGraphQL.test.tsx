import { renderHook, waitFor } from '@testing-library/react';

import { createQueryWrapper } from '../../tests/test-utils';
import { useWeatherGraphQL } from './useWeatherGraphQL';

describe('Given useWeatherGraphQL', () => {
  const mockWeatherData = [
    {
      date: '2025-06-04',
      temperatureMax: 22,
      precipitationSum: 0,
      snowfallSum: 0,
      windspeedMax: 12,
    },
  ];

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('when the hook is enabled and the API responds successfully', () => {
    it('should return the weather data', async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: async () => ({
          data: {
            getWeather: mockWeatherData,
          },
        }),
      });

      const { result } = renderHook(() => useWeatherGraphQL('Athens', true), {
        wrapper: createQueryWrapper(),
      });

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(result.current.data).toEqual(mockWeatherData);
    });
  });

  describe('when the hook is disabled', () => {
    it('should NOT fetch any data', async () => {
      const { result } = renderHook(() => useWeatherGraphQL('Athens', false), {
        wrapper: createQueryWrapper(),
      });

      expect(result.current.status).toBe('pending');
      expect(fetch).not.toHaveBeenCalled();
    });
  });
});
