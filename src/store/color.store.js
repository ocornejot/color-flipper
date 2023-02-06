export const Types = {
  Simple: 'simple',
  Hex: 'hex'
}

export const Colors = {
  Aquamarine: '#7FFFD4',
  CornflowerBlue: '#6495ED',
  DarkGreen: '#006400',
  BlueViolet: '#8A2BE2',
  Red: 'red',
  Green: 'green',
  Rgb: 'rgba(133,122,200)',
  Indigo: '#4B0082',
}

export const Hex = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
];

const state = {
  current: Colors.Purple,
  type: Types.Simple
}

/**
 * 
 * @param {String} color 
 */
const changeColor = ( color = Colors.Purple ) => {
  state.current = color;
}

/**
 * 
 * @param {String} type 
 */
const changeType = ( type = Types.Simple ) => {
  state.type = type;
}

/**
 * 
 * @returns {String}
 */
const getType = () => {
  return state.type;
}

export default {
  changeColor,
  changeType,
  getType
}