'use strict';

module.exports = function (gulp, Server) {

    /**
     * Run test once and exit
     */
    gulp.task('test', (done) => {
        return new Server({
            configFile: __dirname + '../../karma.conf.js',
            singleRun: true
        }, done).start();
    });
};
