function rot13(str) {
  let finalWord = '';
  for (const letter of str.toLowerCase()) {
    if (/[^a-zA-Z]/.test(letter)) {
      finalWord += letter;
    } else {
      const charcode = letter.charCodeAt(0);
      if (charcode + 13 <= 122) {
        finalWord += String.fromCharCode(letter.charCodeAt(0) + 13);
      } else {
        const difference = (charcode + 13) - 122;
        finalWord += String.fromCharCode(difference + 96);
      }
    }
  }

  return finalWord.toUpperCase();
}

export {
  rot13,
};
