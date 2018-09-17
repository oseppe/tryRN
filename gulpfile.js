const fs = require('fs');
const gulp = require('gulp');
const inquirer = require('inquirer');
const mkdirp = require('mkdirp');
const PluginError = require('plugin-error');
const rename = require('gulp-rename');
const template = require('gulp-template');
const yargs = require('yargs');

const GENERATE_SCREEN = 'Screen';
const GENERATE_COMMON_COMPONENT = 'Common Component';
const EXTRAS_API = 'Api';
const EXTRAS_REDUCER = 'Reducer';

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

const checkIsNameInvalid = name => name === undefined
  || (typeof name === 'string' && name.trim() === '');

const checkIsScreenExists = (name) => {
  const screenDir = `./App/Screens/${name}`;
  return fs.existsSync(screenDir);
};

const checkScreenName = (name) => {
  // Throw an error when name param is not passed
  if (checkIsNameInvalid(name)) {
    throw new PluginError(
      'generate:screen',
      'Screen Name missing. Provide one by using the format: create:screen --name <ScreenName>',
    );
  }

  // Throw an error when ScreenName already exists
  if (checkIsScreenExists(name)) {
    throw new PluginError(
      'generate:screen',
      'Screen Name already exists',
    );
  }
};

gulp.task('generate:screen', () => {
  const { name } = yargs.argv;

  checkScreenName(name);

  createScreen(name);
});

gulp.task('generate', () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'type',
        message: 'What to generate?',
        choices: [GENERATE_SCREEN, GENERATE_COMMON_COMPONENT],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name of Component?',
        validate: (answer) => {
          if (checkIsNameInvalid(answer)) return 'Must provide a name';
          if (checkIsScreenExists(answer)) return 'Screen Name already exists';
          return true;
        },
        when: answers => answers.type === GENERATE_SCREEN,
      },
      {
        type: 'checkbox',
        name: 'extras',
        message: 'Additional files?',
        choices: [EXTRAS_API, EXTRAS_REDUCER],
        when: answers => answers.type === GENERATE_SCREEN,
      },
    ])
    .then((answers) => {
      console.log(answers);
    });
});
