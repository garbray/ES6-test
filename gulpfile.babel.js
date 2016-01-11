'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';

import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const Server = require('karma').Server;

const dirs = {
  src: 'app',
  srcJs: 'app/scripts',
  srcCss: 'app/styles',
  dest: 'dist'
};

const sassPaths = {
  src: '${dirs.src}/app.scss',
  dest: '${dirs.dest}/styles/'
};

/**
 * Run test once and exit
 */
gulp.task('test', (done) => {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});


// gulp.task('lint', lint('app/scripts/**/*.js'));

gulp.task('default', () => {
    return gulp.src(dirs.srcJs + '/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('styles', () => {
  return gulp.src(dirs.srcCss)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', plugins.sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dest));
});