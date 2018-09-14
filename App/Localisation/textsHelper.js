import enPH from './strings/en_PH';
import defaultLabels from './defaultLabels';

const getFromJSON = (locale = 'en_PH') => {
  let data = {};

  if (locale === 'en_PH') data = enPH;
  else data = enPH;

  return data;
};

const getLocale = () => 'en_PH';

const getLabelsSource = () => {
  const locale = getLocale();
  return getFromJSON(locale);
};

/*
* Gets label or text matching the key passed
* if key doesnt exist in the label source, use default
* if still not in default, return an empty string
* @param {object} labels from label source
* @param {object} defaults default labels
* @param {string} key
* @return {string} label
*/
export const getMatchingText = (labels, defaults, key) => {
  let label = '';

  if (labels[key]) label = labels[key];
  // Use default value if passed key not in labelsSource
  // TODO: Add logger here indicating that key was not in labelsSource
  else if (defaults[key]) label = defaults[key];
  // TODO: Add logger here indicating that key was not in defaults
  // else loggerFxn();

  return label;
};

/*
* Gets label or text shown to user based on passed key
* @param {string} key for the text
* @return {string} label
*/
export const getText = (key = '') => {
  const labels = getLabelsSource();

  return getMatchingText(labels, defaultLabels, key);
};

/*
* Gets labels or texts shown to user based on passed keys
* @param {array} keys for the texts
* @return {object} labels
*/
export const getTexts = (keys = []) => {
  if (!Array.isArray(keys) || keys.length === 0) return {};

  const labels = getLabelsSource();

  // Creates an obj with key as the key passed and the
  // corresponding value from getLabelsSource
  const requiredLabels = keys.reduce((acc, key) => ({
    ...acc,
    [key]: getMatchingText(labels, defaultLabels, key),
  }), {});

  return requiredLabels;
};
