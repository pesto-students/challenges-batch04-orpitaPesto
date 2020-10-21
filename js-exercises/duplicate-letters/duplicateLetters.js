function duplicateLetters(text) {
  const textArray = text.split('');
  const duplicateList = {};
  let largestDuplicateNumer = 1;
  textArray.forEach((letter) => {
    if (duplicateList[letter]) {
      duplicateList[letter] += 1;
      if (duplicateList[letter] > largestDuplicateNumer) {
        largestDuplicateNumer = duplicateList[letter];
      }
    } else {
      duplicateList[letter] = 1;
    }
  });
  return largestDuplicateNumer === 1 ? false : largestDuplicateNumer;
}

export {
  duplicateLetters,
};
