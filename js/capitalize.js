export default (str) => {
  if (str.length < 1) {
    throw 'Error: Empty Strings not accepted!';
  } else {
    return str[0].toUpperCase() + str.slice(1);
  }
};