const gulp = require('gulp');
const template = require('gulp-template');
const extReplace = require('gulp-ext-replace');
const mkdirp = require('mkdirp');
const yargs = require('yargs');
const PluginError = require('plugin-error');

gulp.task('create:screen', () => {
  const args = yargs.argv;

  // Throw an error when name param is not passed
  if (args.name === undefined) {
    throw new PluginError(
      'create:screen',
      'Screen Name missing. Provide one by using the format: create:screen --name <ScreenName>',
    );
  }

  // Throw an error when ScreenName already exists

  console.log('no errors');

  // mkdirp('./App/Screens/Sample');

  // gulp.src('./App/templates/componentJS.txt')
  //   .pipe(template({
  //     componentName: 'Sample',
  //   }))
  //   .pipe(extReplace('.js'))
  //   .pipe(gulp.dest('App/Screens/Sample'));

  // gulp.src('./App/templates/componentJSTest.txt')
  //   .pipe(extReplace('.test.js'))
  //   .pipe(gulp.dest('App/Screens/Sample'));

  // gulp.src('./App/templates/index.txt')
  //   .pipe(template({
  //     componentName: 'Sample',
  //   }))
  //   .pipe(extReplace('.js'))
  //   .pipe(gulp.dest('App/Screens/Sample'));

  // gulp.src('./App/templates/styles.txt')
  //   .pipe(extReplace('.js'))
  //   .pipe(gulp.dest('App/Screens/Sample'));

  // gulp.src('./App/templates/api.txt')
  //   .pipe(extReplace('.js'))
  //   .pipe(gulp.dest('App/Screens/Sample'));
});
