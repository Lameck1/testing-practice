import Calculator from '../js/calculator';

const calc = new Calculator();

const addition = calc.add(1,2);
const addOneNegative = calc.add(-10,6);
const addTwoNegatives = calc.add(-5,-5); 
const manyArgsAdd = calc.add(1,2,3,4,5,6,7,8);

const subtraction = calc.subtract(5,3);
const subtractOneNegative = calc.subtract(6,-5);
const subtractTwoNegatives = calc.subtract(-5,-5);
const manyArgsSubtract = calc.subtract(1,2,3,4,5,6,7,8);

const multiplication = calc.multiply(5,2);
const multiplyOneNegative = calc.multiply(-10,6);
const multiplyTwoNegatives = calc.multiply(-5,-5);
const manyArgsMultiply = calc.multiply(1,2,3,4);

const division = calc.divide(8,4);
const lesserDividendDivision = calc.divide(4,8);
const zeroDividenDivision = calc.divide(0,5);

describe('Addition Context', () => {
  test('can add two numbers', () => {
    expect(addition).toBe(3);
  });

  test('can add two numbers with one being negative', () => {
    expect(addOneNegative).toBe(-4);
  });

  test('can add two negative numbers', () => {
    expect(addTwoNegatives).toBe(-10);
  });

  test('can still add numbers despites the number of arguments passed', () => {
    expect(manyArgsAdd).toBe(36);
  });
});

describe('Subtraction Context', () => {
  test('can subtract two numbers', () => {
    expect(subtraction).toBe(2);
  });

  test('gives the correct result when subtracting a negative value', () => {
    expect(subtractOneNegative).toBe(11);
  });

  test('gives the correct result when working with only negative values', () => {
    expect(subtractTwoNegatives).toBe(0);
  });

  test('can still do subtraction despite number of arguments provided', () => {
    expect(manyArgsSubtract).toBe(-34);
  });
});

describe('Multiplication Context', () => {
  test('can multiply two numbers', () => {
    expect(multiplication).toBe(10);
  });

  test('gives the correct result when multiplying with one negative number', () => {
    expect(multiplyOneNegative).toBe(-60);
  });

  test('give the correct result when multiplying two negative numbers', () => {
    expect(multiplyTwoNegatives).toBe(25);
  });

  test('can multiply whatevr the number of arguments given', () => {
    expect(manyArgsMultiply).toBe(24);
  });
});

describe('Division Context', () => {
  test('performs division on given divinded', () => {
    expect(division).toBe(2);
  });

  test('gives a floating point number as result if dividend is less than divisor', () => {
    expect(lesserDividendDivision).toBe(0.5);
  });

  test('still performs a division even when the dividend is 0', () => {
    expect(zeroDividenDivision).toBe(0);
  });

  test('throws error on division by zero', () => {
    expect(() => calc.divide(5,0)).toThrow('Error: Division by zero');
  });
});