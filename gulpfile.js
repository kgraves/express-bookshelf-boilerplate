var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var stylish = require('jshint-stylish');

/**
 * Runs all lint tasks.
 *
 * This includes for node, browser and test/spec code.
 */
gulp.task('lint', ['lint-node', 'lint-browser', 'lint-test']);

/**
 * Runs jshint for node code
 */
gulp.task('lint-node', function() {
  return gulp.src(['**/*.js',
      '!./public/javascripts/**/*.js',
      '!./node_modules/**/*.js',
      '!./tests/**/*.js'])
      .pipe(jshint({
        curly: true,
        eqeqeq: true,
        freeze: true,
        latedef: true,
        maxdepth: 3,
        maxparams: 5,
        multistr: true,
        nocomma: true,
        nonbsp: true,
        nonew: true,
        node: true,
        shadow: 'outer',
        singleGroups: true,
        unused: 'vars'
      }))
      .pipe(jshint.reporter(stylish));
});

/**
 * Runs jshint for browser code
 */
gulp.task('lint-browser', function() {
  return gulp.src('./public/javascripts/**/*.js')
      .pipe(jshint({
        browser: true,
        curly: true,
        eqeqeq: true,
        freeze: true,
        jquery: true,
        latedef: true,
        maxdepth: 3,
        maxparams: 5,
        multistr: true,
        nocomma: true,
        node: false,
        nonbsp: true,
        nonew: true,
        shadow: 'outer',
        singleGroups: true,
        unused: 'vars'
      }))
      .pipe(jshint.reporter(stylish));
});

/**
 * Runs jshint for test/specs
 */
gulp.task('lint-test', function() {
  // return gulp.src('spec/**/*_spec.js')
  return gulp.src('tests/**/*.js')
      .pipe(jshint({
        browser: true,
        curly: true,
        eqeqeq: true,
        freeze: true,
        jquery: true,
        latedef: true,
        maxdepth: 3,
        maxparams: 5,
        multistr: true,
        nocomma: true,
        node: true,
        nonbsp: true,
        nonew: true,
        shadow: 'outer',
        singleGroups: true,
        unused: 'vars'
      }))
      .pipe(jshint.reporter(stylish));
});

/**
 * Runs all tests (unit and integration)
 */
gulp.task('test', ['unit-tests', 'integration-tests', 'functional-tests']);

/**
 * Runs all unit tests (client and server)
 */
gulp.task('unit-tests', function(done) {
  return gulp.src('tests/**/*.js', {read: false})
      .pipe(mocha({reporter: 'nyan'}));
});

/**
 * Runs all integration tests (client and server)
 */
gulp.task('integration-tests', ['unit-tests'], function() {
  /* TODO implement when we have tests */
  return null;
});

/**
 * Runs all functional/automation/browser tests
 */
gulp.task('functional-tests', ['integration-tests'], function() {
  /* TODO implement when we have tests */
  return null;
});

/**
 * Runs istanbul (code coverage) on all app code
 */
gulp.task('pre-cover', function() {
  return gulp.src(['**/*.js',
      '!./public/javascripts/**/*.js',
      '!./node_modules/**/*.js',
      '!./tests/**/*.js'])
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('cover', ['pre-cover'], function() {
  return gulp.src('spec/**/*_spec.js')
      .pipe(jasmine())
      .pipe(istanbul.writeReports());
});
