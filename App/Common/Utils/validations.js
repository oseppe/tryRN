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
