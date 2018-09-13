import { isObjectEmpty } from './utils';

describe('isObjectEmpty', () => {
  it('should return true when empty object', () => {
    const input = {};

    const result = isObjectEmpty(input);

    expect(result).toBe(true);
  });

  it('should return false when object has a key', () => {
    const input = { one: 1 };

    const result = isObjectEmpty(input);

    expect(result).toBe(false);
  });
});
