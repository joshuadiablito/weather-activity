import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useDebouncedValue } from './useDebouncedValue';

const DEBOUNCE_MS = 500;

export function useCitySearch() {
  const router = useRouter();
  const [rawCity, setRawCity] = useState('');

  useEffect(() => {
    if (router.isReady && typeof router.query.city === 'string') {
      setRawCity(router.query.city);
    }
  }, [router.isReady, router.query.city]);

  const updateCity = (newCity: string) => {
    setRawCity(newCity);

    router.replace(
      {
        pathname: router.pathname,
        query: { ...router.query, city: newCity },
      },
      undefined,
      { shallow: true },
    );
  };

  const debouncedCity = useDebouncedValue(rawCity, DEBOUNCE_MS);

  return {
    city: rawCity,
    debouncedCity,
    setCity: updateCity,
  };
}
