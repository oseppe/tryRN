import { BTN_LOGIN, BTN_REGISTER } from './labelKeys';
import { getMatchingText, getText, getTexts } from './textsHelper';
import { isObjectEmpty } from './utils';


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

describe('getTexts', () => {
  it('should return empty object if no keys are passed', () => {
    const result = getTexts();

    expect(isObjectEmpty(result)).toBe(true);
  });

  it('should return labels for existing keys', () => {
    const result = getTexts([
      BTN_LOGIN,
      BTN_REGISTER,
    ]);

    expect(result[BTN_LOGIN]).toBe('Login');
    expect(result[BTN_REGISTER]).toBe('Register');
  });

  it('should return empty string for non-existing keys', () => {
    const result = getTexts(['btnSample']);

    expect(result.btnSample).toBe('');
  });
});

describe('getMatchingText', () => {
  it('should return label from label source if key exists in label source', () => {
    const labelSource = {
      btnSample: 'Sample Submit',
      btnFly: 'Fly',
    };

    const defaults = {
      btnSample: 'Sample',
      btnFly: 'Really?',
    };

    const result = getMatchingText(labelSource, defaults, 'btnSample');

    expect(result).toBe(labelSource.btnSample);
  });

  it('should return label from defaults if key NOT in label source', () => {
    const labelSource = {
      btnSample: 'Sample Submit',
      btnFly: 'Fly',
    };

    const defaults = {
      btnSample: 'Sample',
      btnFly: 'Flyyy',
      btnReallyFly: 'Really?',
    };

    const result = getMatchingText(labelSource, defaults, 'btnReallyFly');

    expect(result).toBe(defaults.btnReallyFly);
  });

  it('should return empty string if key NOT in label source AND defaults', () => {
    const labelSource = {
      btnSample: 'Sample Submit',
      btnFly: 'Fly',
    };

    const defaults = {
      btnSample: 'Sample',
      btnFly: 'Flyyy',
      btnReallyFly: 'Really?',
    };

    const result = getMatchingText(labelSource, defaults, 'btnClap');

    expect(result).toBe('');
  });
});
