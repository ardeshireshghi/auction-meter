const gulp = require('gulp');
const config = require('../config');

const jsSrc = config.PATHS.JS_ALL;
const cssSrc = config.PATHS.CSS.concat('**/*.scss');
const imageSrc = config.PATHS.IMAGE;

// configure which files to watch and what tasks to use on file changes
module.exports = () => {
  gulp.watch([cssSrc, './src/index.html'], ['sass', 'html']);
};
