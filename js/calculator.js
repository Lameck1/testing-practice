export default class {
  add(...args) {
    return args.reduce((previous, current) => {
      return previous + current;
    });
  }

  subtract(...args) {
    return args.reduce((previous, current) => {
      return previous - current;
    });
  }

  multiply(...args) {
    return args.reduce((previous, current) => {
      return previous * current;
    });
  }

  divide(x, y) {
    if (y < 1) {
      throw 'Error: Division by zero';
    } else {
      return x/y;
    }
  }
}