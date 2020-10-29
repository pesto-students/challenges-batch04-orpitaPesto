function filter(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}

function diffArray(array1, array2) {
  if (Array.isArray(array1) && Array.isArray(array2)) {
    const firstArray = filter(array1, array2);
    const secondArray = filter(array2, array1);
    const symmetricDifferenceArray = firstArray.concat(secondArray);

    return symmetricDifferenceArray;
  }
  return false;
}

export {
  diffArray,
};
