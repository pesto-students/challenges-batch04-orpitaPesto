function removeFalsyValues(array) {
  const finalArray = [];
  for (const item of array) {
    if (item) {
      finalArray.push(item);
    }
  }
  return finalArray;
}

export {
  removeFalsyValues,
};
