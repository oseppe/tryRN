const gulp = require('gulp');
const template = require('gulp-template');
const extReplace = require('gulp-ext-replace');
const mkdirp = require('mkdirp');

gulp.task('copy', () => {
  mkdirp('./App/Screens/Sample');

  gulp.src('./App/templates/componentJS.txt')
    .pipe(template({
      componentName: 'Sample',
    }))
    .pipe(extReplace('.js'))
    .pipe(gulp.dest('App/Screens/Sample'));

  gulp.src('./App/templates/componentJSTest.txt')
    .pipe(extReplace('.test.js'))
    .pipe(gulp.dest('App/Screens/Sample'));

  gulp.src('./App/templates/index.txt')
    .pipe(template({
      componentName: 'Sample',
    }))
    .pipe(extReplace('.js'))
    .pipe(gulp.dest('App/Screens/Sample'));

  gulp.src('./App/templates/styles.txt')
    .pipe(extReplace('.js'))
    .pipe(gulp.dest('App/Screens/Sample'));
});
