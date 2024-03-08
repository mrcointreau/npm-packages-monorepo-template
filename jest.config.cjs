/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  // See https://github.com/kulshekhar/ts-jest/issues/4081
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        verbatimModuleSyntax: false
      }
    }
  },
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node'
}
