'use strict';

const kebabCase = require('lodash.kebabcase');
const capitalize = require('lodash.capitalize');
const { pluralizeConcern } = require('./concerns');

function generateModuleName(moduleSubject, concernType) {
  return `${kebabCase(`${moduleSubject} ${pluralizeConcern(concernType)}`)}`;
}

function generatePackageName(moduleName) {
  return `savvycss-${moduleName}`;
}

function generateGithubBaseURL(moduleName) {
  return `https://github.com/echobind/savvy-css/modules/${moduleName}`;
}

module.exports = {
  generateModuleName,
  generatePackageName,
  generateGithubBaseURL
};
