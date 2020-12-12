function duplicateLetters(string){
    let arrayOfCharacters = [...string];
    let objectString = {};
    arrayOfCharacters.map((character)=> {
        objectString[character]? objectString[character] +=1 :objectString[character]=1
    });
    let maxRepititions = Math.max.apply(Math, Object.values(objectString));
    return maxRepititions === 1?false:maxRepititions;
}

// function duplicateLetters(text) {
//   const textArray = text.split('');
//   const duplicateList = {};
//   let largestDuplicateNumer = 1;
//   textArray.forEach((letter) => {
//     if (duplicateList[letter]) {
//       duplicateList[letter] += 1;
//       if (duplicateList[letter] > largestDuplicateNumer) {
//         largestDuplicateNumer = duplicateList[letter];
//       }
//     } else {
//       duplicateList[letter] = 1;
//     }
//   });
//   return largestDuplicateNumer === 1 ? false : largestDuplicateNumer;
// }

export {
  duplicateLetters,
};
