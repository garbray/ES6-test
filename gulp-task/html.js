'use strict';

module.exports = function (gulp, plugins, gutil, dir) {

	gulp.task('html', () => {
		return gulp.src(dir.src + '/index.html')
	    	.pipe(plugins.htmllint({}, htmllintReporter));
	});
 

	function htmllintReporter(filepath, issues) {
		if (issues.length > 0) {
	    issues.forEach(function (issue) {
	      gutil.log(
	      	gutil.colors.cyan('[gulp-htmllint] ') + 
	      	gutil.colors.white(filepath + ' [' + issue.line + 
	      	',' + issue.column + ']: ') + gutil.colors.red('(' + issue.code + ') ' + 
	      	issue.msg)
	      );
	    });
	 
	    process.exitCode = 1;
	  }
	}
};
