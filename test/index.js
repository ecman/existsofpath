'use strict';
const path = require('path');
const assert = require('assert');
const existsOfPath = require('../');

let existingPath = '';
let testPath = '';
let actualPath = '';

process.on('unhandledRejection', (err) => {
  throw err;
});

new Promise((resolve, reject) => {
  existingPath = 'test';
  testPath = path.join(existingPath, 'some', 'where', 'not', 'there');
  resolve(testPath);
})
.then(existsOfPath)
.then((resultPath) => {
  actualPath = resultPath;
  assert.equal(existingPath, actualPath,
    `Result should be "${existingPath}" not "${actualPath}"`)
  console.log(`result path: "${actualPath}" of "${testPath}" OK`);
})

.then(() => {
  existingPath = '';
  testPath = path.join('definitely', 'not', 'there');
  return testPath;
})
.then(existsOfPath)
.then((resultPath) => {
  actualPath = resultPath;
  assert.equal(existingPath, actualPath,
    `Result should be "${existingPath}" not "${actualPath}"`)
  console.log(`result path: "${actualPath}" of "${testPath}" OK`);
})
