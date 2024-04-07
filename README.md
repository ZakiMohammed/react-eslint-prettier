# React ESLint + Prettier

React project for setting up ESLint + Prettier.

## Run App

Below command will run the project:

```
npm run server
npm run dev
```

For running the server, install `json-server` globally:

```
npm install -g json-server
```

## Initial Setup

Below command executed to perform initial setup:

```
npm create vite@latest

# project name: react-eslint
# framework: react
# variant: JavaScript + SWC

cd react-eslint
npm i

```

## ESLint

Run command:

```
npm run lint
```

Add new script:

```
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"lint:html": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0 --format html > lint.html",
```

Add ESLint ignore file `.eslintignore`:

```
node_modules/
dist/
.prettierrc.cjs
.eslintrc.cjs
```

Refer: https://eslint.org/

## ESLint + Prettier

Add Prettier config `.prettierrc.cjs` and Prettier ignore file `.prettierignore`:

```
module.exports = {
  singleQuote: true,
  bracketSameLine: true,
  endOfLine: 'auto',
};
```

Add below file names fo your `.prettierignore` file:

```
node_modules
package-lock.json
dist
lint-*
lint.*
```

Understand the philosophy of formatting with ESLint + Prettier from:
https://github.com/prettier/eslint-config-prettier/
https://github.com/prettier/eslint-plugin-prettier#recommended-configuration

Add `eslint-config-prettier` to project:

```
npm install --save-dev eslint-config-prettier
```

Add `eslint-plugin-prettier` and `prettier` to project:

```
npm install --save-dev eslint-plugin-prettier
npm install --save-dev --save-exact prettier
```

Add new script:

```
"prettier:write": "prettier --config .prettierrc.cjs --write .",
"prettier:check": "prettier --config .prettierrc.cjs --check ."
```

Add Prettier rules to `.eslintrc.cjs`:

```
module.exports = {
  extends: [
    ...
    'plugin:prettier/recommended'
  ],
};
```
