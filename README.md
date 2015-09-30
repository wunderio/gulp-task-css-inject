Gulp task css inject
=================

> A gulp task which injects all your compiled css files into your Drupal 8 theme.libraries.css

## Installation
```sh
npm install --save-dev wunderkraut/gulp-task-css-inject
```

## Usage

### Basic usage

```js
// Require gulp.
var gulp = require('gulp')

// Require task module and pass gulp to provide the gulp tasks.
require('gulp-task-css-inject')(gulp)
```

### Advanced usage
You can also pass a configuration to the task. This allows you to overwrite the default configuration and provide other configuration like a base path for your files.

#### gulpfile.js
```js
var gulp = require('gulp')
var gulpConfig = require('./gulpconfig')

// Just pass the configuration object as second parameter.
require('gulp-task-css-inject')(gulp, gulpConfig)
```

#### gulpconfig.js
```js
var path = require('path');

module.exports = {
  // Basic configuration.
  basePath: '.',

  // Overwrite default configurations.
  cssInject: {
    target: 'YOUR_THEME.libraries.yml',
    src: path.join('css', '**', '*.css')
  }
}
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/wunderkraut/gulp-task-css-inject/issues/new).
