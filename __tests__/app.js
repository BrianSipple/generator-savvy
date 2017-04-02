'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const { CONCERN_OBJECT_PATTERN } = require('../utils/concerns');

describe('generator-savvy-css:app', () => {
  const TEST_MODULE_NAME = 'grid-objects';

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
      'CHANGELOG.md',
      'index.css',
      'LICENSE',
      'postcss.config.js',
      'stylelint.config.js',
      'package.json',
      `lib/${TEST_MODULE_NAME}.css`
    ]);
  });
});
