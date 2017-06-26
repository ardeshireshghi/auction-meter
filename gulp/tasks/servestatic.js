const gulp = require('gulp');
const webserver = require('gulp-webserver');
const config = require('../config');

module.exports = () => {
  gulp.src('.')
    .pipe(webserver({
      livereload: {
        enable: true, // need this set to true to enable livereload
        filter: (fileName) => {
          if (fileName.match(/(gif|jpg|jpeg|tiff|png)/)) { // exclude all source maps from livereload
            return false;
          } else {
            return true;
          }
        }
      },
      directoryListing: true,
      open: false,
      port: config.STATIC_PORT,
      host: config.STATIC_HOST,
      fallback: 'index.html'
    }))
    .on('error', err => console.log(err));
};
