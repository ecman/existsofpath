# existsofpath

[![build status](https://api.travis-ci.org/ecman/existsofpath.png)](https://travis-ci.org/ecman/existsofpath) [![codecov](https://codecov.io/gh/ecman/existsofpath/branch/master/graph/badge.svg)](https://codecov.io/gh/ecman/existsofpath) [![Code Climate](https://codeclimate.com/github/ecman/existsofpath/badges/gpa.svg)](https://codeclimate.com/github/ecman/existsofpath)

Get the existing part of a given path, asynchronously.

# Usage

```js
'use strict';
const existsOfPath = require('existsofpath');

// If an empty "test" folder exists 
// in the current working directory
let pathToCheck = 'test/some/where/not/there';

existsOfPath(pathToCheck)
  .then((existingPath) => 
    console.log(
      `Path "${existingPath}" exists of given path "${pathToCheck}"`));
```

Output

```text
Path "test" exists of given path "test/some/where/not/there"
```
