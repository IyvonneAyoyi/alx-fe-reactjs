export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["<rootDir>/src/__tests__/**/*.test.js"]
};
