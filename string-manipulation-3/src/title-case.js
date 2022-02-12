/* exported titleCase */
function titleCase(title) {
  const lowerCase = title.toLowerCase();
  const myArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const titleArray = lowerCase.split(' ');
  const fullWordArray = [];
  for (let i = 0; i < titleArray.length; i++) {
    if (titleArray[i] === 'javascript') {
      titleArray[i] = 'JavaScript';
    } else if (titleArray[i] === 'javascript:') {
      titleArray[i] = 'JavaScript:';
    }
    if (titleArray[i] === 'api') {
      titleArray[i] = 'API';
    }
    if (myArray.includes(titleArray[0])) {
      titleArray[0] = titleArray[0].charAt(0).toUpperCase() + titleArray[0].slice(1);
    }
    if (titleArray[i].includes(':')) {
      titleArray[i + 1] = titleArray[i + 1].charAt(0).toUpperCase() + titleArray[i + 1].slice(1);
    }
    if (titleArray[i].includes('-')) {
      const newArray = titleArray[i].split('-');
      newArray[1] = newArray[1].charAt(0).toUpperCase() + newArray[1].slice(1);
      const joinArray = newArray.join('-');
      titleArray[i] = joinArray;
    }
    const firstLetter = titleArray[i].charAt(0).toUpperCase();
    const restOfTheWord = titleArray[i].slice(1);
    const fullWord = firstLetter + restOfTheWord;
    if (myArray.includes(titleArray[i])) {
      fullWordArray.push(titleArray[i]);
    } else {
      fullWordArray.push(fullWord);
    }
  }
  const fullWordToString = fullWordArray.join(' ');
  return fullWordToString;
}
