import { render, screen } from '@testing-library/react';

import { useWeatherGraphQL } from '../hooks/useWeatherGraphQL';
import { useCitySearch } from '../hooks/useCitySearch';
import { rankActivitiesFromWeather } from '../utils/rankActivities';

import Home from './index';

jest.mock('../hooks/useCitySearch');
jest.mock('../hooks/useWeatherGraphQL');
jest.mock('../utils/rankActivities');

describe('Given the Home page', () => {
  beforeEach(() => {
    (useCitySearch as jest.Mock).mockReturnValue({
      city: 'Athens',
      debouncedCity: 'Athens',
      setCity: jest.fn(),
    });
  });

  describe('when weather data is loading', () => {
    it('should show a skeleton loader', () => {
      (useWeatherGraphQL as jest.Mock).mockReturnValue({
        data: null,
        error: null,
        isLoading: true,
      });

      render(<Home />);

      expect(screen.getByText(/weather activity ranker/i)).toBeInTheDocument();
      expect(screen.getByRole('textbox', { name: '' })).toBeInTheDocument();
      expect(screen.getByText(/submit/i)).toBeInTheDocument();
      expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument(); // Ant Skeleton
    });
  });

  describe('when weather data has loaded and is ranked', () => {
    it('should render activity cards', () => {
      (useWeatherGraphQL as jest.Mock).mockReturnValue({
        data: [{}], // dummy
        error: null,
        isLoading: false,
      });

      (rankActivitiesFromWeather as jest.Mock).mockReturnValue([
        {
          date: '2025-06-04',
          activities: [{ name: 'Surfing', score: 8 }],
        },
      ]);

      render(<Home />);

      expect(screen.getByText(/weather activity ranker/i)).toBeInTheDocument();
      expect(screen.getByText('Surfing')).toBeInTheDocument();
      expect(screen.getByText('8/10')).toBeInTheDocument();
    });
  });

  describe('when an error occurs', () => {
    it('should display an error alert', () => {
      (useWeatherGraphQL as jest.Mock).mockReturnValue({
        data: null,
        error: new Error('Failed to fetch'),
        isLoading: false,
      });

      render(<Home />);

      expect(screen.getByRole('alert')).toHaveTextContent(/failed to fetch/i);
    });
  });
});
