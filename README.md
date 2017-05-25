# generator-savvy-css 

[![NPM version][npm-image]][npm-url] 
[![Build Status][circle-image]][circle-url] 
[![Dependency Status][daviddm-image]][daviddm-url]

> Generator for scaffolding out a Savvy module or utility.

## Installation

First, install [Yeoman](http://yeoman.io) and this generator using either [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/))...

```bash
npm install -g yo
npm install -g @savvy-css/generator-savvy-css
```

... or [yarn](https://yarnpkg.com/en/).

```bash
yarn global add yo
yarn global add @savvy-css/generator-savvy-css
```

## Usage 

Run the `yo` command to generate your new project:

```bash
yo @savvy-css/generator-savvy-css
```

From there, the generator is setup to configure a Savvy CSS module within 
one of Savvy's [categories of concerns](). 

Simply select your concern (for example, "utility"), the _subject_ of your module _within_ the context of that concern (for example, "spacing"), and from there, after a few more straightforward prompts, the generator will know how to scaffold your project!

## License

MIT © 2017 [Brian Sipple](https://github.com/BrianSipple)


[npm-image]: https://img.shields.io/npm/v/@savvy-css/generator-savvy-css.svg
[npm-url]: https://www.npmjs.com/package/@savvy-css/generator-savvy-css

[circle-image]: https://circleci.com/gh/savvy-css/generator-savvy-css/tree/master.svg?style=svg&circle-token={{CIRCLE_TOKEN}}
[circle-url]: https://circleci.com/gh/savvy-css/generator-savvy-css/tree/master
[daviddm-image]: https://david-dm.org/savvy-css/generator-savvy-css.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/savvy-css/generator-savvy-css
