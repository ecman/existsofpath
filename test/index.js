'use strict';
const path = require('path');
const assert = require('assert');
const existsOfPath = require('../');

let existingPath = '';
let partExistingPath = path.join('some', 'where', 'not', 'there');

existsOfPath(partExistingPath)
  .then((resultPath) => assert
    .equal(existingPath, resultPath, 
      `Result should be "${existingPath}" not "${resultPath}"`))
  .catch((err) => assert
    .fail(null, err, 'A rejection should not have occurred'));

let nonExistingPath = path.join('definitely', 'not', 'there');

existsOfPath(nonExistingPath)
  .then((resultPath) => assert
    .equal('', resultPath,
      `Result should be "" not "${resultPath}"`))
  .catch((err) => assert
    .fail(null, err, 'A rejection should not have occurred'));
