# npm-packages-monorepo-template

[![Build Status](https://github.com/mrcointreau/npm-packages-monorepo-template/workflows/build/badge.svg)](https://github.com/mrcointreau/npm-packages-monorepo-template/actions)

This repository is a template for managing a monorepo with npm packages. It's designed to streamline the development of TypeScript-based npm packages with a shared core package.

## Packages

This monorepo includes the following packages:

- `core`: A foundational package that is used by other packages in this monorepo.
- `package1`: An npm package that depends on `core`.
- `package2`: Another npm package that also depends on `core`.

Each package is configured with TypeScript and includes a Rollup build setup to create distributable artifacts.

## Features

- **ESLint Configuration**: Includes `@mrcointreau/eslint-config-typescript` for consistent TypeScript linting.
- **TypeScript Configuration**: Centralized tsconfig for consistent TypeScript compilation settings.
- **Rollup Build**: Each package is equipped with a Rollup build configuration to create the `dist` directory for publishing.
- **Automated Release Workflow**: Utilizes GitHub Actions for CI/CD to automate the release process.

## Getting Started

To get started with this monorepo, clone the repository and install dependencies:

```bash
git clone https://github.com/mrcointreau/npm-packages-monorepo-template
cd npm-packages-monorepo-template
npm install
```

### Working with Packages

You can work on each package individually. Navigate to the package directory and start developing:

```bash
cd packages/package1
# work on package1
```

### Building Packages

Each package can be built using Rollup. From within a package's directory, run:

```bash
npm run build
```

This command will compile the TypeScript source and create a `dist` folder with the build artifacts.

## Releasing Packages

To release a package, follow these steps:

1. **Create a Release Branch**: Create and switch to a release branch named `release-[package_name]`:

   ```bash
   git checkout -b release-package1
   ```

2. **Push to GitHub**: Push the branch to GitHub:

   ```bash
   git push origin release-package1
   ```

3. **Trigger the Release CI**: The push will trigger the release CI GitHub workflow, which will build, version, and publish your package to the npm registry.

4. **Merge the Branch**: After the release CI workflow has successfully completed, it will update the `package.json` and `CHANGELOG.md` in the package folder. You should then merge the release branch back into your main branch:

   ```bash
   git checkout main
   git merge release-package1
   git push origin main
   ```

This process ensures that your package is versioned, built, and published automatically, while also keeping your repository's main branch up-to-date with the latest changes.
