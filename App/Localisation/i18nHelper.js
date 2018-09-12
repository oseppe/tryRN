import {
  BTN_LOGIN,
  BTN_REGISTER,
  TITLE_REGISTER,
  FORM_LABEL_EMAIL,
  FORM_LABEL_POLICY,
  BTN_SUBMIT_GENERIC,
} from './keys';

const getFromJSONSample = () => ({
  [BTN_LOGIN]: 'Login',
  [BTN_REGISTER]: 'Register',
  [TITLE_REGISTER]: 'Register Account',
  [FORM_LABEL_EMAIL]: 'Email',
  [FORM_LABEL_POLICY]: 'Policy',
  [BTN_SUBMIT_GENERIC]: 'Submit',
});

const getFromJSON = (locale = 'en_UK') => {
  let data = {};

  try {
    data = require(`./${locale}.json`);
  } catch (error) {
    data = require('./en_PH.json');
  }

  return data;
};

/*
* Gets label or text shown to user
* @param {string} key for the text
* @return {string} label
*/
const getText = (key = '') => {
  const labels = getFromJSON();

  return labels[key] ? labels[key] : '';
};

export default getText;
