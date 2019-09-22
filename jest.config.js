module.exports = {
  roots: ['<rootDir>/src'],
  "setupFiles": [
	"<rootDir>/test-config/test-shim.js",
	"<rootDir>/test-config/test-setup.js"
],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(redux-persist)/)'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^.*\\.scss$': '<rootDir>/test-config/SassStub.js'
  }
};
