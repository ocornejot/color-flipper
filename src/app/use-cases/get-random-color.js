import { Colors } from "../../store/color.store";
import { getRandomNumber } from "./get-random-number";

/**
 * 
 * @returns {<String>}
 */
export const getRandomSimpleColor = () => {
  const keys = Object.keys( Colors );
  const randomKey =  getRandomNumber( keys.length );
  return Colors[ keys[randomKey] ];
}