// tests/test-utils.tsx
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface Props {
  children: ReactNode;
}

export function createQueryWrapper() {
  const queryClient = new QueryClient();

  const Wrapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  Wrapper.displayName = 'QueryClientTestProvider';

  return Wrapper;
}
