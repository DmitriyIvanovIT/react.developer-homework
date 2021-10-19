// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/jestSettings.js"],
  transform: {
    "^.+\\.(ts|tsx|js)$": "<rootDir>/node_modules/babel-jest",
  },
  moduleNameMapper: {
    // https://jestjs.io/docs/en/webpack#handling-static-assets
    "\\.(css|s([ac])ss)$": "<rootDir>/src/tests/__mocks__/styleMock.js",
    "@/components/(.*)": "<rootDir>/src/components/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{ts,tsx}'
  ]
};
