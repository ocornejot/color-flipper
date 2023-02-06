import { Hex } from "../../store/color.store"
import { getRandomNumber } from "./get-random-number";

export const getRandomHexColor = () => {
  let hexColor = '#';
  for ( let i=0 ; i<6 ; i++) {
    hexColor += Hex[ getRandomNumber( Hex.length ) ];
  }
  return hexColor;
}