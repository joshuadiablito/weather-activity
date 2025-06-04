import React from 'react';
import { Alert } from 'antd';

type Props = {
  error: Error | string | null;
  className?: string;
};

export const ErrorAlert = ({ error, className }: Props) => {
  if (!error) {
    return null;
  }

  const message = typeof error === 'string' ? error : error.message;

  return (
    <Alert
      className={className}
      message="Something went wrong"
      description={message}
      type="error"
      showIcon
    />
  );
};
