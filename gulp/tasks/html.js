'use strict';

const gulp = require('gulp');
const inject = require('gulp-inject');
const Transform = require('stream').Transform;

module.exports = function () {
  const target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./dist/*.css'], {read: true});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./dist'));
};
