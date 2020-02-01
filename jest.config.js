module.exports = {
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/support'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/__tests__/support/fileMock.js',
  },
  automock: false,
  setupFiles: ['raf/polyfill', '<rootDir>/src/__tests__/support/jestFetchMockSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/support/enzymeSetup.js'],
};
