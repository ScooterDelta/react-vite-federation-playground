/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/src/**/*.test.(ts|tsx|js)'],
  setupFiles: ['whatwg-fetch'],
};
