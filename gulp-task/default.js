'use strict';

module.exports = function (gulp, plugins, dir) {

    gulp.task('default', () => {
    return gulp.src(dir.srcJs + '/**/*.js')
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/scripts'));
	});
};
