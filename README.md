# APC Code Style

[![Build Status](https://travis-ci.org/APCOvernight/apc-style.svg?branch=master)](https://travis-ci.org/APCOvernight/apc-style) [![Greenkeeper badge](https://badges.greenkeeper.io/APCOvernight/apc-style.svg)](https://greenkeeper.io/)

Code style rules and dependencies for APC js/scss/pug projects

```
yarn add -D apc-style
```

## Editor config

Copy the .editorconfig file from this project to your project root

```
cp node_modules/apc-style/.editorconfig .editorconfig
```
This copying is now performed automatically with version 1.2
## Lint rules

### ES lint

Add this to your .eslintrc file:

```json
{
  "extends": "apc"
}
```
This skeleton .eslintrc is automatically copyied with version 1.2

Note: We omitted the eslint-config- prefix since it is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your .eslintrc file.

### Sass-Lint

Include sass-lint by either adding a config file rule to your `.sass-lint.yml` file

```yml
options:
  config-file: node_modules/apc-style/.sass-lint.yml
```

or via `package.json`:

```json
{
  "sasslintConfig": "node_modules/apc-style/.sass-lint.yml"
}
```

### Pug-lint

Include pug-lint rules by adding the following to your `.pug-lintrc` file:

```json
{
  "extends": "./node_modules/apc-style/.pug-lintrc"
}
```
