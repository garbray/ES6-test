'use strict';

module.exports = function (gulp, plugins, dir) {

    gulp.task('lint', function() {
    return gulp.src([dir.destCss + '/*.css'])
        .pipe(plugins.csscombLint());
	});
};




 

