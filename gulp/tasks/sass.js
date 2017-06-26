'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-minify-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const config = require('../config');

const cssSrc = config.PATHS.CSS;
const cssOutput = config.PATHS.CSS_MINIFIED_OUT;
const buildDest = config.PATHS.DEST;

module.exports = () => {
  return gulp.src(cssSrc.concat('main.scss'))
    .pipe(sass({
      includePaths: [
      	cssSrc
      ],
      sourcemap: true
    }))
    .on('error', (err) => {
    	console.error('Error during building stylesheets', err);
    })
    .pipe(autoprefixer())
    .pipe(minifyCss())
    .pipe(rename(cssOutput))
    .pipe(gulp.dest(buildDest))
};
