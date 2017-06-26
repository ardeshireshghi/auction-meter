const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config');

const imgSrc = config.PATHS.IMAGE;
const imgOutput = config.PATHS.IMAGE_OUT;

module.exports = () => {
  gulp.src(imgSrc)
    .pipe(imagemin({verbose: true}))
    .on('error', (err) => {
      console.log(err.message);
    })
    .pipe(gulp.dest(imgOutput));
};
