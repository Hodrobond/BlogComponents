module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**',
    '!**/node_modules/**',
    '!**/lib/**',
  ],
  setupFilesAfterEnv: [
    './testing/setupTests.js',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  roots: [
    'packages/',
  ],
};
