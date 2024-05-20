# 6.1.1
npm >= 7 and node >= 12

# 6.1.0
Minor deps update, `react/function-component-definition` rule more aligned with airbnb 

# 6.0.1
(tech) ???

# 5.1.1
* added two custom link components `Link`, and `StyledLink`

# 5.1.0
* forcing to use `noreferrer` on links for security reasons: https://owasp.org/www-community/attacks/Reverse_Tabnabbing

# 5.0.0
* Standard tsconfig.json 🚀
* Added LMN registry support
* Added Gitlab CI integration
* Upgraded deps
* Some cleanup

# 4.5.2
* disable base rule for no-shadow for Typescript files to avoid incorrect errors. see: https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope

# 4.5.1
* disable base rule for no-use-before-define for Typescript files to avoid incorrect errors. see: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use

# 4.5.0
* updated @typescript-eslint/parser to v4.5.0
* updated @typescript-eslint/eslint-plugin to v4.5.0
* updated eslint to v7.12.0
* There have been some changes in version 4 of typescript-eslint which needs above dependency updates so that it can work with the new TS version (check release not v4.0.0 here: https://github.com/typescript-eslint/typescript-eslint/releases)


# 4.4.0
* Ignored auto-generated TypeScript files (`.d.ts`)
* Added common file extensions
* Ignore file extensions in `import` statements (it was conflicting with TS lint warning)
