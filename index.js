'use strict';

var path = require('path');
var defaultsDeep = require('lodash.defaultsdeep');
var inject = require('gulp-inject');

module.exports = function (gulp, gulpConfig) {

  gulpConfig = gulpConfig || { basePath: '.' };

  // Merge default config with gulp config.
  var defaultConfig = {
    cssInject: {
      target: 'YOUR_THEME.libraries.yml',
      src: path.join('css', '**', '*.css')
    }
  };

  var config = defaultsDeep(gulpConfig, defaultConfig).cssInject;

  gulp.task('css-inject', function () {
    // It's not necessary to read the files (will speed up things), we're only after their paths:
    var sources = gulp.src(path.join(gulpConfig.basePath, config.src), {read: false});

    return gulp.src(path.join(gulpConfig.basePath, config.target))
      .pipe(inject(sources, {
          starttag: '# css-components:{{ext}} #',
          endtag: '# endinject #',
          transform: function(filepath, file, index, length, targetFile) {
            var path = filepath.substring(1);
            return path + ': {}'
          }
        }, {name: 'css-components'}))
      .pipe(gulp.dest('./'));
  });
};
