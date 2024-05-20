# ESLINT-CONFIG-LMN

Coding standards for LMN front-end projects: an integration of the [Airbnb coding standards](https://www.npmjs.com/package/eslint-config-airbnb) and [Prettier code formatter](https://prettier.io/)

## Installation

1. Install required dependencies:
```
npm i --save typescript@^5

npm i --save-dev @lmn/eslint-config-lmn@^7 @typescript-eslint/eslint-plugin@^6 @typescript-eslint/parser@^6 eslint@^8 eslint-plugin-react@^7 eslint-plugin-react-hooks@^4 eslint-plugin-prettier@^5 eslint-plugin-jsx-a11y@^6 eslint-plugin-import@^2 prettier@^3
```

## Usage

1. Create in the root of your project a file named `.eslintrc` with the following configuration:

    ```json
    {
      "extends": "@lmn/eslint-config-lmn"
    }
    ```


2. To use the standard TypeScript config setup your `tsconfig.json` like this:

    ```json
    {
      "extends": "@lmn/eslint-config-lmn"
    }
    ```

    ⚠️ Note for `tsc` users: the default config has `noEmit: true`. Please override it if you need to output compiled files.


3. To use it from your CLI or to integrate it in your tasks in `package.json`:
    ```json
    {
      "scripts": 
        {
          "lint:fix": "eslint './**/*.{ts,tsx,js,jsx}' --fix"
        }
    }
    ```

    ⚠️ The **RECOMMENDED** approach is to fix only staged files in order to speed-up. You can do this with pre-commit hooks:
   - Install [pre-commit](https://github.com/observing/pre-commit) or [husky](https://github.com/typicode/husky)
   - Install [lint-staged](https://github.com/okonet/lint-staged)
   - Configure them in `package.json`

    ```json
    {
     "scripts": {
        "lint:staged": "lint-staged && git add ."
      },
      "pre-commit": "lint:staged",
      "lint-staged": {
        "*.{js,jsx,ts,tsx}": "eslint --fix"
      }
     }
    ```
    **It's highly recommended to use the `--fix` flag**

## Other info
- To integrate it with Grunt tasks you will need [grunt-eslint](https://github.com/sindresorhus/grunt-eslint) in your project
 
