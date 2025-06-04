import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};

export default createJestConfig(config);
