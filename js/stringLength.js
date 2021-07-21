export default (string) => {
  if (string.length > 0 && string.length <= 10) {
    return string.length;  
  } else {
    throw 'String length out of bound.';
  }
};
