/**
 * Dependencies
 */
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');


gulp.task('minify-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('minify-js', function() {
  return gulp.src(['src/views/js/*.js'])
    .pipe(minify({}))
    .pipe(gulp.dest('dist/views/js'));
});

// create a task that will run all commands when typing "gulp" in terminal
gulp.task('default', ['minify-css', 'minify-js'], function() {});
