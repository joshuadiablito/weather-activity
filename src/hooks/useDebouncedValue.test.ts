import { act, renderHook } from '@testing-library/react';

import { useDebouncedValue } from './useDebouncedValue';

jest.useFakeTimers();

describe('Given useDebouncedValue', () => {
  describe('when the hook is initialized with a value', () => {
    it('should return the initial value immediately', () => {
      const { result } = renderHook(() => useDebouncedValue('initial', 500));
      expect(result.current).toBe('initial');
    });
  });

  describe('when the value changes', () => {
    it('should NOT update the debounced value immediately', () => {
      const { result, rerender } = renderHook(
        ({ value, delay }) => useDebouncedValue(value, delay),
        {
          initialProps: { value: 'start', delay: 500 },
        },
      );

      rerender({ value: 'changed', delay: 500 });

      expect(result.current).toBe('start');
    });

    it('should update the debounced value after the delay has passed', () => {
      const { result, rerender } = renderHook(
        ({ value, delay }) => useDebouncedValue(value, delay),
        {
          initialProps: { value: 'start', delay: 500 },
        },
      );

      rerender({ value: 'updated', delay: 500 });

      act(() => {
        jest.advanceTimersByTime(500);
      });


      expect(result.current).toBe('updated');
    });

    it('should reset the debounce timer if the value changes again before the delay completes', () => {
      const { result, rerender } = renderHook(
        ({ value, delay }) => useDebouncedValue(value, delay),
        {
          initialProps: { value: 'one', delay: 300 },
        },
      );

      rerender({ value: 'two', delay: 300 });
      act(() => jest.advanceTimersByTime(100));

      rerender({ value: 'three', delay: 300 });
      act(() => jest.advanceTimersByTime(100));

      expect(result.current).toBe('one');

      act(() => jest.advanceTimersByTime(300));
      expect(result.current).toBe('three');
    });
  });
});
