'use strict';

const config = require('./gulp/config');
const gulpTasks = config.TASKS;
const gulp = require('./gulp')(gulpTasks);

gulp.task('default', ['sass', 'servestatic', 'html', 'watch']);
