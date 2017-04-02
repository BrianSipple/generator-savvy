'use strict';

const CONCERN_UTILITY = 'Utility';
const CONCERN_OBJECT_PATTERN = 'Object Pattern';
const CONCERN_GARNISH = 'Garnish';
const CONCERN_VARIABLE = 'Variable';
const CONCERN_SETTING = 'Setting';

const CONCERNS = [CONCERN_UTILITY, CONCERN_OBJECT_PATTERN, CONCERN_GARNISH, CONCERN_VARIABLE, CONCERN_SETTING];

const PLURALIZED_CONCERNS = {
  [CONCERN_UTILITY.toLowerCase()]: 'Utilities',
  [CONCERN_OBJECT_PATTERN.toLowerCase()]: 'Object Patterns',
  [CONCERN_GARNISH.toLowerCase()]: 'Garnishes',
  [CONCERN_VARIABLE.toLowerCase()]: 'Variables',
  [CONCERN_SETTING.toLowerCase()]: 'Settings'
};

/**
 * Small pluralization helper for concern names.
 *
 * (Speaking of concerns, if inflection concerns start to grow, let's look in to using a standard,
 * lodash-like utility instead 🙂.)
 */
function pluralizeConcern(concern) {
  return PLURALIZED_CONCERNS[(concern || '').toLowerCase()] || concern;
}

module.exports = {
  CONCERNS,
  CONCERN_UTILITY,
  CONCERN_OBJECT_PATTERN,
  CONCERN_GARNISH,
  CONCERN_VARIABLE,
  CONCERN_SETTING,
  pluralizeConcern
};
