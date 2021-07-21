import stringLength from "../js/stringLength";

const str = 'Some test';
const emptyStr = '';
const longStr = 'This is a very long string';

test("counts length of 'str' to equal 11", () => {
  expect(stringLength(str)).toBe(9);
});

test('throws an error if string has characters less that 1', () => {
  expect(() => stringLength(emptyStr)).toThrow('String length out of bound.');
});

test('throws an error if string has characters more that 10', () => {
  expect(() => stringLength(longStr)).toThrow('String length out of bound.');
});