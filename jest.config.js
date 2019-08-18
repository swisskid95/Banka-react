module.exports = {
  collectCoverage: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ['<rootDir>/enzyme.config.js'],
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  moduleNameMapper: {
    '\\.css$': require.resolve('./src/__test__/tools/styleMock.js')
  }
};
