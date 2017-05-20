'use strict';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const kebabCase = require('lodash.kebabcase');
const { pluralizeConcern } = require('./concerns');

function generateModuleName(moduleSubject, concernType) {
  return `${kebabCase(`${moduleSubject} ${pluralizeConcern(concernType)}`)}`;
}

function generatePackageName(moduleName) {
  return `${moduleName}`;
}

function generateGithubBaseURL(moduleName) {
  return `https://github.com/savvy-css/${moduleName}`;
}

function generateTextualDate() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = MONTH_NAMES[currentDate.getMonth()];
  const currentDay = currentDate.getDate();

  return `${currentMonth} ${currentDay}, ${currentYear}`;
}

module.exports = {
  generateModuleName,
  generatePackageName,
  generateGithubBaseURL,
  generateTextualDate
};
