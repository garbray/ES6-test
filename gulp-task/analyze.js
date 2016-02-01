module.exports = function (gulp, plugins, dir) {

  gulp.task('analyze', () => {
    return gulp.src(['app/scripts/*.js', 'test/*.js'])
      .pipe(plugins.jscs())
      .pipe(plugins.jscs.reporter());
  });
};
