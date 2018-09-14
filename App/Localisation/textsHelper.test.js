import { BTN_LOGIN, TITLE_REGISTER } from './labelKeys';
import {
  getDefaultFromKey, getMatchingText, getText, getTexts,
} from './textsHelper';
import { isObjectEmpty } from './utils';


describe('getText', () => {
  it('should return exact passed key when key doesnt exist in source && key doesnt follow convention', () => {
    const input = 'btnSample';

    const result = getText(input);

    expect(result).toBe('btnSample');
  });

  it('should return correct string when key exists', () => {
    const input = BTN_LOGIN;

    const result = getText(input);

    expect(result).toBe('Login');
  });

  it('should return default string based on key when key doesnt exist in source && key follows convention', () => {
    const input = 'btnGeneric_submit-missions';

    const result = getText(input);

    expect(result).toBe('submit missions');
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
      TITLE_REGISTER,
    ]);

    expect(result[BTN_LOGIN]).toBe('Login');
    expect(result[TITLE_REGISTER]).toBe('Register Account');
  });

  it('should return default key based on convention for non-existing keys', () => {
    const result = getTexts(['btn_Fly-Away']);

    expect(result['btn_Fly-Away']).toBe('Fly Away');
  });
});

describe('getMatchingText', () => {
  it('should return label from label source if key exists in label source', () => {
    const labelSource = {
      'btn_Sample-Btn': 'Sample Submit',
      btn_Fly: 'Fly',
    };

    const result = getMatchingText(labelSource, 'btn_Sample-Btn');

    expect(result).toBe(labelSource['btn_Sample-Btn']);
  });

  it('should return label based on key if key NOT in label source && key following convention', () => {
    const labelSource = {
      btnSample: 'Sample Submit',
      btnFly: 'Fly',
    };

    const result = getMatchingText(labelSource, 'btn_Clap');

    expect(result).toBe('Clap');
  });

  it('should return key if key NOT in label source && key not following convention', () => {
    const labelSource = {
      btnSample: 'Sample Submit',
      btnFly: 'Fly',
    };

    const result = getMatchingText(labelSource, 'btnReallyFly');

    expect(result).toBe('btnReallyFly');
  });
});

describe('getDefaultFromKey', () => {
  it('should return empty string if passed key is an array', () => {
    const input = ['btn_Sample', 'btn_Fly'];

    const result = getDefaultFromKey(input);

    expect(result).toBe('');
  });

  it('should return empty string if passed key is null', () => {
    const input = null;

    const result = getDefaultFromKey(input);

    expect(result).toBe('');
  });

  it('should return empty string if passed key is object', () => {
    const input = { btnSample: 'Sample' };

    const result = getDefaultFromKey(input);

    expect(result).toBe('');
  });

  it('should return empty string if passed key is undefined', () => {
    const input = undefined;

    const result = getDefaultFromKey(input);

    expect(result).toBe('');
  });

  it('should return passed key if not ff separator convention: no _', () => {
    const input = 'yunHurn';

    const result = getDefaultFromKey(input);

    expect(result).toBe(input);
  });

  it('should return passed key if not ff separator convention: abc_', () => {
    const input = 'crj_';

    const result = getDefaultFromKey(input);

    expect(result).toBe(input);
  });

  it('should return passed key if not ff separator convention: abc_    ', () => {
    const input = 'crj_     ';

    const result = getDefaultFromKey(input);

    expect(result).toBe(input);
  });

  it('should return proper label if key ff convention', () => {
    const input = 'btn_release-kraken';

    const result = getDefaultFromKey(input);

    expect(result).toBe('release kraken');
  });

  it('should return second half of key if key not ff label convention', () => {
    const input = 'btn_release-kraken';

    const result = getDefaultFromKey(input);

    expect(result).toBe('release kraken');
  });
});
