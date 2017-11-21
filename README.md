# APC Code Style

Rules used for the APC-style package. Don't install this directly, it is included as part of apc-style.

```
yarn add -D apc-style
```

## Editor config

Copy the .editorconfig file from this project to your project root

```
cp node_modules/apc-style/.editorconfig .editorconfig
```

## ES lint

Add this to your .eslintrc file:

```json
{
  "extends": "apc"
}
```

Note: We omitted the eslint-config- prefix since it is automatically assumed by ESLint.

You can override settings from the shareable config by adding them directly into your .eslintrc file.