'use strict';
const path = require('path');
const assert = require('assert');
const existsOfPath = require('../');

let existingPath = 'test';
let partExistingPath = path.join(
  existingPath, 'some', 'where', 'not', 'there');

existsOfPath(partExistingPath)
  .then((resultPath) => assert
    .equal(existingPath, resultPath, 
      `Result should be ${existingPath} not ${resultPath}`));

let nonExistingPath = path.join('definitely', 'not', 'there');

existsOfPath(nonExistingPath)
  .then((resultPath) => assert
    .equal('', resultPath,
      `Result should be "" not "${resultPath}"`));
