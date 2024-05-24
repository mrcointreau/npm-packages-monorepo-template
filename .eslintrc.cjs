module.exports = {
  root: true,
  extends: ['@mrcointreau/eslint-config-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname, // for Zed compatibility
    project: ['./tsconfig.eslint.json'],
  },
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'coverage',
    'dist',
    'package-lock.json',
  ],
}
