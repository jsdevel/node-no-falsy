'use strict';

var noUtils = require('no-utils');

module.exports = noFalsy;

function noFalsy(input) {
  return noUtils.transform(input, isFalsy);
}

function isFalsy(value) {
  return !value;
}
