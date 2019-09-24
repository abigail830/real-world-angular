module.exports = {
    preset: "jest-preset-angular",
    roots: ['src'],
    setupFilesAfterEnv: "<rootDir>/src/setup-jest.ts",
    transformIgnorePatterns: [
        "node_modules/(?!(@ionic-native|@ionic|angularfire2)/)"
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        "src/**/*.ts"
    ],
    coverageDirectory: "<rootDir>/coverage/",
    coveragePathIgnorePatterns: [
        "node_modules",
        "test-config",
        "<rootDir>/src/app/models",
        "jestGlobalMocks.ts",
        ".module.ts",
        "<rootDir>/src/main.ts",
        "<rootDir>/src/polyfills.ts"
    ],
  }