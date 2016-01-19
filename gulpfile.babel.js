'use strict';

//load all dependencies
import gulp from 'gulp';
import sass from 'gulp-sass';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const plugins = gulpLoadPlugins();
const reload = browserSync.reload;
const Server = require('karma').Server;
const jscs = require('gulp-jscs');

//app paths
const dir = {
  src: 'app',
  srcJs: 'app/scripts',
  srcCss: 'app/styles',
  dest: 'dist',
  destJS: '${dir.dest}/scripts',
  destCss: '${dir.dest}/styles'
};

const sassPaths = {
  src: '${dirs.src}/app.scss',
  dest: '${dirs.dest}/styles/',
};

//require tasks
require('./gulp-task/test')(gulp, Server);
require('./gulp-task/default')(gulp, plugins, dir);
require('./gulp-task/styles')(gulp, plugins, dir);

// gulp.task('lint', lint('app/scripts/**/*.js'));
