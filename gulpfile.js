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

const EXTRAS_SCREEN = [EXTRAS_API, EXTRAS_REDUCER];

const DIR_TEMPLATES = './App/templates';
const DIR_SCREENS = './App/Screens';

// const formatLowerCamelCase = name => {
//   const isCommaSeparator = name.includes
// }

// const formatLowerCamelCase = name => {

// }

const isSeparatorInvalid = (name) => {
  const isCommaSeparator = name.includes(',');
  const isDashSeparator = name.includes('-');
  const isUnderlineSeparator = name.includes('_');
  const isSpaceSeparator = name.includes(' ');

  const isExistSeparators = [
    isCommaSeparator,
    isDashSeparator,
    isUnderlineSeparator,
    isSpaceSeparator,
  ];

  const countSeparators = isExistSeparators.reduce(
    (acc, isSeparator) => acc + (isSeparator ? 1 : 0),
    0,
  );

  return countSeparators > 1;
};

/*
* Create folders and files for the screen
* @param {string} name
* @param {object} extra files to generate
* @return {string} label
*/
const createScreen = (name, { api = false, reducer = false }) => {
  const directoryName = name.toLowerCase();
  const screenDir = `${DIR_SCREENS}/${directoryName}`;

  // Create Screen Directory
  mkdirp(screenDir);

  // Create Screen Component
  gulp.src(`${DIR_TEMPLATES}/componentJS.txt`)
    .pipe(template({
      componentName: name,
    }))
    .pipe(rename({
      basename: name,
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create test for screen component
  gulp.src(`${DIR_TEMPLATES}/componentJSTest.txt`)
    .pipe(rename({
      basename: name,
      extname: '.test.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create index exporter of screen component
  gulp.src(`${DIR_TEMPLATES}/index.txt`)
    .pipe(template({
      componentName: name,
    }))
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create styles for screen component
  gulp.src(`${DIR_TEMPLATES}/styles.txt`)
    .pipe(rename({
      extname: '.js',
    }))
    .pipe(gulp.dest(screenDir));

  // Create api file for screen component
  if (api) {
    gulp.src(`${DIR_TEMPLATES}/api.txt`)
      .pipe(rename({
        extname: '.js',
      }))
      .pipe(gulp.dest(screenDir));
  }

  // Create reducer file for screen component
  if (reducer) {
    gulp.src(`${DIR_TEMPLATES}/reducer.txt`)
      .pipe(rename({
        extname: '.js',
      }))
      .pipe(gulp.dest(screenDir));
  }
};

/*
* checks if provided name is invalid
* @param {string} name
* @return {boolean} isInvalid
*/
const checkIsNameInvalid = name => name === undefined
  || typeof name !== 'string'
  || (typeof name === 'string' && name.trim() === '');

/*
* checks if provided name already exists
* @param {string} name
* @return {boolean} isExisting
*/
const checkIsScreenExists = (name) => {
  const screenDir = `${DIR_SCREENS}/${name}`;
  return fs.existsSync(screenDir);
};

/*
* Converts answer to extra files from array to object
* @param {array} extra files chosen by user
* @param {array} extra files available to a single screen
* @return {object} convertedExtraFiles
*/
const convertExtraFiles = (extras, typeExtras) => {
  // Return empty object if dont need to convert extras
  if (!Array.isArray(extras)
  || !Array.isArray(typeExtras)
  || extras.length === 0
  || typeExtras.length === 0
  ) return {};

  // Convert extras from array to object
  const convertedExtras = typeExtras.reduce((acc, typeExtra) => {
    // check if a specified typeExtra is in the extras chosen by user
    const matchedExtra = extras.find(extra => extra === typeExtra);

    return {
      ...acc,
      [typeExtra.toLowerCase()]: matchedExtra !== undefined,
    };
  }, {});

  return convertedExtras;
};

/*
* Checks provided screen name in generate:screen
* NOTE: throws errors
* @param {string} name
*/
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
      'Screen Name already in use',
    );
  }

  // Throw an error if separator is not valid
  if (isSeparatorInvalid(name)) {
    throw new PluginError(
      'generate:screen',
      'Dont mix the valid separators: comma, space, dash, underline',
    );
  }
};

// Gulp task for generate:screen
gulp.task('generate:screen', () => {
  const { name, api, reducer } = yargs.argv;

  checkScreenName(name);

  createScreen(name, { api, reducer });
});

// Gulp task for interactive generation of components
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
        message: 'Name of Screen?',
        validate: (answer) => {
          if (checkIsNameInvalid(answer)) return 'Must provide a name';
          if (checkIsScreenExists(answer)) return 'Screen Name already in use';
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
      const { name, extras, type } = answers;

      if (type === GENERATE_SCREEN) {
        const convertedExtras = convertExtraFiles(extras, EXTRAS_SCREEN);

        createScreen(name, convertedExtras);
      } else console.log(`${answers.type} generation is not yet supported`);
    });
});
