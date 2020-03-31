import combineWords from "./parseEmotions";
import { LIVEBOLDANDBLOOM, PREPSCHOLAR, HOFFMAN } from "./emotions";

export const SUGGESTIONS = combineWords(LIVEBOLDANDBLOOM, PREPSCHOLAR, HOFFMAN);
