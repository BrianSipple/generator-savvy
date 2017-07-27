# <%= moduleDisplayName %>

[![Latest NPM release][npm-badge]][npm-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]
[![License][license-badge]][license-badge-url]

_<%= moduleDescription %>_

## Installation

You can install this package using [yarn](https://yarnpkg.com/en/docs/install):

```shell
yarn add --dev <%= modulePackageName %>
```

... or using [NPM](https://docs.npmjs.com/getting-started/installing-node):

```shell
npm install --save-dev <%= modulePackageName %>
```


## Usage

Within a project that's capable of importing CSS, simply import
the module by its package name within your own CSS:

```css
@import "<%= modulePackageName %>";

```

Importing this module will add [its properties](/lib/<%= moduleFileName %>.css) to your project. To override them, simply define them in any portion of your CSS that's imported/processed later.


[npm-badge]: https://img.shields.io/npm/v/@savvy-css/<%= moduleName %>.svg
[npm-badge-url]: https://www.npmjs.com/package/@savvy-css/<%= moduleName %>
[license-badge]: https://img.shields.io/npm/l/@savvy-css/<%= moduleName %>.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/savvy-css/<%= moduleName %>.svg
[dependencies-badge-url]: https://david-dm.org/savvy-css/<%= moduleName %>
[devDependencies-badge]: https://img.shields.io/david/dev/savvy-css/<%= moduleName %>.svg
[devDependencies-badge-url]: https://david-dm.org/savvy-css/<%= moduleName %>#info=devDependencies

