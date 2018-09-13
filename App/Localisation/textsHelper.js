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
* Gets label or text shown to user based on passed key
* @param {string} key for the text
* @return {string} label
*/
export const getText = (key = '') => {
  const labels = getLabelsSource();

  return labels[key] ? labels[key] : '';
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
  const requiredLabels = keys.reduce((acc, key) => {
    acc[key] = labels[key] ? labels[key] : '';
    return acc;
  }, {});

  return requiredLabels;
};
