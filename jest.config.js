// @ts-expect-error(2307)
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    resetMocks: true,
    transform: {
        "\\.(html|css)$": "<rootDir>/jest/raw-loader.js",
    },
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
    ],
    coverageReporters: ["text", "lcov"],
};
