import stringLength from "../js/stringLength";

const str = 'Test String';

test('counts length of string to equal 11', () => {
  expect(stringLength(str)).toBe(11);
});