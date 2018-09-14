import enPH from './strings/en_PH';

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
* Get label value based on key
* @param {string} key
* @return {string} label
*/
export const getDefaultFromKey = (key = '') => {
  // Check if passed key is a string
  if (typeof key !== 'string') return '';
  // Check if passed key follows separator convention for default label
  if (!key.includes('_')) return key;

  const processedKey = key.split('_');

  // Check if there is a default label
  if (processedKey.length > 1 && processedKey[1].trim() === '') return key;

  return processedKey[1].replace('-', ' ');
};

/*
* Gets label or text matching the key passed
* if key doesnt exist in the label source, use default
* if still not in default, return an empty string
* @param {object} labels from label source
* @param {string} key
* @return {string} label
*/
export const getMatchingText = (labels, key) => {
  let label = getDefaultFromKey(key);

  // TODO: Add logger here indicating that key was not in labelsSource
  if (labels[key]) label = labels[key];

  return label;
};

/*
* Gets label or text shown to user based on passed key
* @param {string} key for the text
* @return {string} label
*/
export const getText = (key = '') => {
  const labels = getLabelsSource();

  return getMatchingText(labels, key);
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
    [key]: getMatchingText(labels, key),
  }), {});

  return requiredLabels;
};
