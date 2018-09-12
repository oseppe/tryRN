import getText from './i18nHelper';
import { BTN_LOGIN } from './keys';

describe('getText', () => {
  it('should return empty string when key doesnt exist', () => {
    const input = 'btnSample';

    const result = getText(input);

    expect(result).toBe('');
  });

  it('should return correct string when key exists', () => {
    const input = BTN_LOGIN;

    const result = getText(input);

    expect(result).toBe('Login');
  });
});
