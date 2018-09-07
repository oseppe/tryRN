export const capitalize = (word) => {
  if (word.length === 0) return '';
  return `${word[0].toUpperCase()}${word.slice(1)}`;
};
