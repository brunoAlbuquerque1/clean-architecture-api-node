module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  collectCoverage: true,
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
