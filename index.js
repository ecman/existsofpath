'use strict';
const fs = require('fs');
const path = require('path');
const rectrl = require('rectrl');

const existsOfPath = rectrl((maybe, filePath) => {

  fs.exists(filePath, (exists) => {
    if (
      exists ||
      filePath === ''
    ) maybe.resolve(filePath);
    else {
      let src = '\\'+path.sep+'?[^\\'+path.sep+']+\\'+path.sep+'?$';

      filePath = filePath.replace(RegExp(src), '');
      maybe.resume(maybe, filePath);
    } 
  });

});

module.exports = existsOfPath; 
