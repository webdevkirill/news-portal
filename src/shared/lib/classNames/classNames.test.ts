import { classNames } from './classNames';

describe('classNames', () => {
  test('only first argument', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    const expected = 'someClass add1 add2';
    expect(classNames('someClass', {}, ['add1', 'add2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass mod1 mod3';
    expect(classNames('someClass', { mod1: true, mod2: false, mod3: true })).toBe(expected);
  });

  test('with mods and additional params', () => {
    const expected = 'someClass add1 add2 mod1 mod3';
    expect(classNames('someClass', { mod1: true, mod2: false, mod3: true }, ['add1', 'add2'])).toBe(expected);
  });
});
