'use strict';
var path = require('path');
var assert = require('assert');
var existsOfPath = require('../');

var existingPath = '';
var testPath = '';
var actualPath = '';

process.on('unhandledRejection', function (err) {
  throw err;
});

new Promise(function (resolve, reject) {
  existingPath = 'test';
  testPath = path.join(existingPath, 'some', 'where', 'not', 'there');
  resolve(testPath);
})
.then(existsOfPath)
.then(function (resultPath) {
  actualPath = resultPath;
  assert.equal(existingPath, actualPath,
    'Result should be "' + existingPath + '" not "' + actualPath + '"')
  console.log('result path: "' + actualPath + '" of "' + testPath + '" OK');
})

.then(function () {
  existingPath = '';
  testPath = path.join('definitely', 'not', 'there');
  return testPath;
})
.then(existsOfPath)
.then(function (resultPath) {
  actualPath = resultPath;
  assert.equal(existingPath, actualPath,
    'Result should be "' + existingPath + '" not "' + actualPath + '"')
  console.log('result path: "' + actualPath + '" of "' + testPath + '" OK');
})
