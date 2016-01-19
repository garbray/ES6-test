'use strict';

module.exports = function (gulp, plugins, dir) {

    gulp.task('styles', () => {
        return gulp.src(dir.srcCss)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sass.sync().on('error', plugins.sass.logError))
            .pipe(plugins.autoprefixer())
            .pipe(plugins.sourcemaps.write('.'))
            .pipe(gulp.dest(dir.destCss));
    });
};
