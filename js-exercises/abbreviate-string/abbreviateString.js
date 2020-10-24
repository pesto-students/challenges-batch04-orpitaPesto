function abbreviateString(str) {
  if (typeof (str) !== 'string') {
    throw new Error();
  }
  const splitString = str.split(' ');
  const name = (`${splitString[0]} ${splitString[splitString.length - 1][0].toUpperCase()}.`);
  return name;
}

export { abbreviateString };
