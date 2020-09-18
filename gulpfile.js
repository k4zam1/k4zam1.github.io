var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./public/'));
});
gulp.task('sass:watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.task('sass'));
});
