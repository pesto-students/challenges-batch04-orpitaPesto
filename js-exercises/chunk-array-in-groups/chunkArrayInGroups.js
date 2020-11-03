function chunkArrayInGroups(array, chunkSize) {
  const chunkArray = [];
  let subArray = [];
  let i = 0;

  for (const element of array) {
    subArray.push(element);
    i += 1;
    if (i === chunkSize) {
      i = 0;
      if (subArray.length > 0) {
        chunkArray.push(subArray);
      }
      subArray = [];
    }
  }
  if (subArray.length > 0) {
    chunkArray.push(subArray);
  }
  return chunkArray;
}

export {
  chunkArrayInGroups,
};
