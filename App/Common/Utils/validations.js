export const required = (value) => {
  const valid = value !== null && value !== undefined && (typeof (value) === 'string' && value.trim().length > 0);

  return valid ? '' : 'Cannot be empty';
};

export const noXs = (value) => {
  if (value === '') return '';

  const val = value.toLowerCase();

  const index = val.indexOf('x');

  return index === -1 ? '' : 'Cannot have any x';
};

export const validateInput = (value, validators = []) => {
  let errorMsgs = [];

  // Run validators only if at least 1 is passed
  if (validators.length > 0) {
    errorMsgs = validators.map(validator => validator(value));
  }

  const hasErrorMsg = errorMsgs.find(msg => msg !== '');

  return hasErrorMsg === undefined ? '' : hasErrorMsg;
};
