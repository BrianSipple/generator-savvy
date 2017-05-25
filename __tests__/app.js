'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { CONCERN_OBJECT_PATTERN } = require('../utils/concerns');

describe('generator-savvy-css:app', () => {
  const TEST_MODULE_NAME = 'grid-object-patterns';
  const TEST_MODULE_NAME_SPACED = 'grid object patterns';
  const TEST_PACKAGE_NAME = '@savvy-css/grid-object-patterns';

  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        concernType: CONCERN_OBJECT_PATTERN,
        moduleSubject: 'grid',
        githubUserName: 'BrianSipple',
        authorName: 'Brian Sipple',
        authorContact: '@Brian_Sipple'
      });
  });

  it('creates files', () => {
    assert.file([
      '.gitignore',
      '.vscode/launch.json',
      'CHANGELOG.md',
      'index.css',
      'LICENSE',
      'postcss.config.js',
      'stylelint.config.js',
      'package.json',
      `lib/${TEST_MODULE_NAME}.css`,
      `test/index-test.css`,
      `test/index.html`,
      `test/postcss.config.js`
    ]);
  });

  it('fills package.json with correct information', () => {
    assert.JSONFileContent('package.json', { // eslint-disable-line new-cap
      name: TEST_PACKAGE_NAME,
      main: `build/${TEST_MODULE_NAME}.css`,
      style: `build/${TEST_MODULE_NAME}.css`,
      devDependencies: {
        'postcss-cssnext': '^2.11.0',
        'postcss-cli': '^4.0.0'
      },
      keywords: [
        'savvy-css',
        'savvy-css-package',
        `savvy-css ${TEST_MODULE_NAME_SPACED}`
      ],
      scripts: {
        transform: `postcss index.css -o build/${TEST_MODULE_NAME}.css --config postcss.config.js`
      }
    });
  });
});
