const gulp = require('gulp');
const template = require('gulp-template');
const mkdirp = require('mkdirp');
const yargs = require('yargs');
const PluginError = require('plugin-error');
const rename = require('gulp-rename');
const fs = require('fs');

const createScreen = (name) => {
  const screenDir = `./App/Screens/${name}`;

  // Create Screen Directory
  mkdirp(screenDir);

  // Create Screen Component
  gulp.src('./App/templates/componentJS.txt')
    .pipe(template({
      componentName: name,
    }))
    .pipe(rename({
      basename: name,
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create test for screen component
  gulp.src('./App/templates/componentJSTest.txt')
    .pipe(rename({
      basename: name,
      extname: '.test.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create index exporter of screen component
  gulp.src('./App/templates/index.txt')
    .pipe(template({
      componentName: name,
    }))
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create styles for screen component
  gulp.src('./App/templates/styles.txt')
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create api file for screen component
  gulp.src('./App/templates/api.txt')
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));
};

const checkIsNameInvalid = name => name === undefined;

const checkIsScreenExists = (name) => {
  const screenDir = `./App/Screens/${name}`;
  return fs.existsSync(screenDir);
};

const checkScreenName = (name) => {
  // Throw an error when name param is not passed
  if (checkIsNameInvalid(name)) {
    throw new PluginError(
      'create:screen',
      'Screen Name missing. Provide one by using the format: create:screen --name <ScreenName>',
    );
  }

  // Throw an error when ScreenName already exists
  if (checkIsScreenExists(name)) {
    throw new PluginError(
      'create:screen',
      'Screen Name already exists',
    );
  }
};

gulp.task('create:screen', () => {
  const { name } = yargs.argv;

  checkScreenName(name);

  createScreen(name);
});

// gulp.task('create', () => {

// });
