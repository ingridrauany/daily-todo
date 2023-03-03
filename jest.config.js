module.exports = {
	testEnvironment: "jsdom",
	testPathIgnorePatterns: ["/node_modules/"],
	setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.ts"],
	moduleNameMapper: {
		"\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.ts",
		"\\.(css|less|sass|scss)$": "identity-obj-proxy",
	},
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.ts(x)"],
};
