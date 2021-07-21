import capitalize from '../js/capitalize';

const str = 'hi';
const emptyString = '';

test('it capitalizes a string', () => {
  expect(capitalize(str)).toBe('Hi');
});

test('it throws an error if argument is number', () => {
  expect(() => capitalize(emptyString)).toThrow('Error: Empty Strings not accepted!');
});