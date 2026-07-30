module.exports = {
  testMatch: ["<rootDir>/src/__tests__/**/*.test.{ts,tsx}"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^react-native$": "<rootDir>/src/__mocks__/react-native.ts",
    "^react-native-safe-area-context$": "<rootDir>/src/__mocks__/react-native-safe-area-context.ts",
    "^expo-linear-gradient$": "<rootDir>/src/__mocks__/expo-linear-gradient.ts",
    "^lucide-react-native$": "<rootDir>/src/__mocks__/lucide-react-native.ts",
  },
  transform: {
    "^.+\\.tsx?$": ["babel-jest", { configFile: false, presets: ["@react-native/babel-preset"] }],
  },
};
