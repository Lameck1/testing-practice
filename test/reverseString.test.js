import reverseString from '../js/reverseString';

const str = 'Hi';

test('it reverses a string', () => {
  expect(reverseString(str)).toBe('iH');
  expect(reverseString(str)).toMatch(/iH/);
});