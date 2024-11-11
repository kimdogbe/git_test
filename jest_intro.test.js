import { capitalise, reverseString, calc, caesarCipher, analyseArray } from './jest_intro.js';

test('check word is capitalised', () => {
  expect(capitalise('balderdash')).toBe('BALDERDASH');
  expect(capitalise('')).toBe('');
  expect(capitalise('k')).toBe('K');
})

test('check string reversed', () => {
  expect(reverseString('random')).toBe('modnar');
  expect(reverseString('')).toBe('');
  expect(reverseString('k')).toBe('k');
  expect(reverseString('racecar mode')).toBe('edom racecar');
})

test('calculator obj calculates', () => {
  expect(calc.sum(1,2)).toBe(3);
  expect(calc.mult(3,2)).toBe(6);
  expect(calc.sub(5,2)).toBe(3);
  expect(calc.div(1,2)).toBe(0.5); //might need to be close to
})

test('caesar ciphers', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('a', 26)).toBe('a');
  expect(caesarCipher('k', 5)).toBe('p');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('k!?', 5)).toBe('p!?');
})

test('analyse array function', () => {
  expect(analyseArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
})