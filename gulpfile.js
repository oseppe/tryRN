const gulp = require('gulp');
const template = require('gulp-template');
const mkdirp = require('mkdirp');
const yargs = require('yargs');
const PluginError = require('plugin-error');
const rename = require('gulp-rename');

gulp.task('create:screen', () => {
  const { name } = yargs.argv;

  // Throw an error when name param is not passed
  if (name === undefined) {
    throw new PluginError(
      'create:screen',
      'Screen Name missing. Provide one by using the format: create:screen --name <ScreenName>',
    );
  }

  // Throw an error when ScreenName already exists

  // console.log('no errors');

  mkdirp(`./App/Screens/${name}`);

  gulp.src('./App/templates/componentJS.txt')
    .pipe(template({
      componentName: name,
    }))
    .pipe(rename({
      basename: name,
      extname: '.js',
    }))
    .pipe(gulp.dest(`./App/Screens/${name}`));

  gulp.src('./App/templates/componentJSTest.txt')
    .pipe(rename({
      basename: name,
      extname: '.test.js',
    }))
    .pipe(gulp.dest(`./App/Screens/${name}`));

  gulp.src('./App/templates/index.txt')
    .pipe(template({
      componentName: name,
    }))
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(`./App/Screens/${name}`));

  gulp.src('./App/templates/styles.txt')
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(`./App/Screens/${name}`));

  gulp.src('./App/templates/api.txt')
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(`./App/Screens/${name}`));
});
