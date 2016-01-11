// Karma configuration
module.exports = function(config) {
  config.set({
  	basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'app/scripts/**/*.js',
      'test/**/*.spec.js'
    ],
    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': ['babel', 'coverage'],
      'test/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    },
    coverageReporter: {
      // specify a common output directory 
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property 
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly 
        // output them in the `dir` directory 
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    }
  });
};