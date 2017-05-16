'use strict';
const fs = require('fs');
const path = require('path');
const recuresolve = require('recuresolve');

const existsOfPath = recuresolve(
  (thisFn, resolve, reject, filePath) => {

  fs.exists(filePath, (exists) => {
    if (
      exists ||
      filePath === ''
    ) resolve(filePath);
    else {
      let src = '\\'+path.sep+'?[^\\'+path.sep+']+\\'+path.sep+'?$';

      filePath = filePath.replace(RegExp(src), '');
      thisFn(thisFn, resolve, reject, filePath);
    } 
  });

});

module.exports = existsOfPath; 
