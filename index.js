'use strict';
var fs = require('fs');
var path = require('path');

function existsOfPath(filePath) {
  return new Promise(function (resolve, reject) {
    fs.exists(filePath, function (exists) {
      var src;
      if (exists || filePath === '') {
        resolve(filePath);
      } else {
        src = '\\'+path.sep+'?[^\\'+path.sep+']+\\'+path.sep+'?$';
        resolve(existsOfPath(filePath.replace(RegExp(src), '')));
      }
    });
  });
}

module.exports = existsOfPath; 
