function balancedBraces(input) {
  const openbackets = ['(', '[', '{'];
  const closedBrackets = [')', ']', '}'];
  const occuredBrackets = [];
  for (const char of input) {
    if (openbackets.includes(char)) {
      occuredBrackets.push(char);
    }
    if (closedBrackets.includes(char)) {
      if (occuredBrackets[occuredBrackets.length - 1]
        === openbackets[closedBrackets.indexOf(char)]) { occuredBrackets.pop(); }
    }
  }
  if (occuredBrackets.length > 0) {
    return false;
  }
  return true;
}

export {
  balancedBraces,
};

// const openbackets = ['(', '[', '{'];
// // let closedBrackets ={'(':')','[':']','{':'}'};
// const closedBrackets = [')', ']', '}'];
// const occuredBrackets = [];
// const closed_occurences = [];

// const input = 'for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}';
// for (const char of input) {
//   if (openbackets.includes(char)) {
//     occuredBrackets.push(char);
//   }
//   if (closedBrackets.includes(char)) {
// eslint-disable-next-line max-len
//     if (occuredBrackets[occuredBrackets.length - 1] === openbackets[closedBrackets.indexOf(char)]) { occuredBrackets.pop(); }
//   }
// }
