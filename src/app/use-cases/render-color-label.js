/**
 * 
 * @param {String} color
 */
export const renderColorLabel = ( color ) => {
  const elementColor = document.querySelector('.color');
  elementColor.innerHTML = color;
}