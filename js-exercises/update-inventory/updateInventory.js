function updateInventory(array1, array2) {
  const concatenatedArray = array1.concat(array2).map(([v, k]) => [k, v]).sort();
  let key = '';
  const updatedObject = {};
  for (let i = 0; i < concatenatedArray.length; i++) {
    key = concatenatedArray[i][0];
    if (key in updatedObject) {
      updatedObject[key] += concatenatedArray[i][1];
    } else {
      updatedObject[key] = concatenatedArray[i][1];
    }
  }
  const ary2D = Object.keys(updatedObject).map((arrayKey) => [updatedObject[arrayKey], arrayKey]);
  return ary2D;
}
export {
  updateInventory,
};
