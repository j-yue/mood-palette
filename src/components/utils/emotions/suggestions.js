import combineWords from "./parseEmotions";
import { LIVEBOLDANDBLOOM, PREPSCHOLAR, HOFFMAN } from "./emotions";

const SUGGESTIONS = combineWords(LIVEBOLDANDBLOOM, PREPSCHOLAR, HOFFMAN);

//remove words with no results by using source.unsplash.com
const purgeSuggestions = async (list = SUGGESTIONS) => {
  const URL = "https://source.unsplash.com/featured/?";
  const ERROR_URL =
    "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200";

  let result = [];
  for (let word of list) {
    let response = await fetch(URL + word);
    if (response.url !== ERROR_URL) {
      result.push(word);
    }
    if (word === list[list.length - 1]) console.log(result);
  }
};

export { SUGGESTIONS, purgeSuggestions };
