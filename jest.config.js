module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**',
    '!**/node_modules/**',
    '!**/lib/**',
  ],
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
