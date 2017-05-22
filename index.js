'use strict';
var fs = require('fs');
var path = require('path');

function existsOfPath(filePath) {
  return new Promise((resolve, reject) => {
    fs.exists(filePath, (exists) => {
      if (exists || filePath === '') {
        resolve(filePath);
      } else {
        let src = '\\'+path.sep+'?[^\\'+path.sep+']+\\'+path.sep+'?$';
        resolve(existsOfPath(filePath.replace(RegExp(src), '')));
      }
    });
  });
}

module.exports = existsOfPath; 
