//convert a long string of words separated by newline characters into an array
//helper for combineWords
const parseEmotions = str => {
  return str.split(/\n/).filter(word => word.length > 0);
};

//take any number of string parameters and combine them into a single array of nonrepeating, lowercase words
const combineWords = (...lists) => {
  let result = [];
  lists.map(list => {
    const cleanList = parseEmotions(list);
    for (let word of cleanList) {
      word = word.toLowerCase();
      if (!result.includes(word)) result.push(word);
    }
  });
  return result;
};

export default combineWords;
