import html from './index.html?raw';
import colorStore, { Types } from '../store/color.store';
import { getRandomSimpleColor, renderColorLabel } from './use-cases';
import { getRandomHexColor } from './use-cases/get-random-hex-color';

const ElementIDS = {
  Button: '#btn',
  SimpleBtn: '#btn-simple',
  HexBtn: '#btn-hex'
}

export const App = ( elementId ) => {
  const element = document.querySelector( elementId );

  if ( !element ) throw new Exception(`Element ${ elementId } not found`);

  (() => {
    const app = document.createElement('div');
    app.innerHTML = html;
    element.append( app );
  })()

  //HTML references
  const mainBtn = document.querySelector( ElementIDS.Button );
  const simpleBtn = document.querySelector( ElementIDS.SimpleBtn );
  const hexBtn = document.querySelector( ElementIDS.HexBtn );

  mainBtn.addEventListener('click', () => {
    const type = colorStore.getType();

    let randomColor = null;
    if ( type === Types.Simple ) {
      randomColor = getRandomSimpleColor();
    } else {
      randomColor = getRandomHexColor();
    }
    
    document.body.style.backgroundColor = randomColor;
    colorStore.changeColor( randomColor );
    renderColorLabel( randomColor );
  });

  simpleBtn.addEventListener('click', ({ target }) => {
    colorStore.changeType(Types.Simple);
    hexBtn.classList.remove('selected');
    target.classList.add('selected');
  });
  hexBtn.addEventListener('click', ({ target }) => {
    colorStore.changeType(Types.Hex);
    simpleBtn.classList.remove('selected');
    target.classList.add('selected');
  });
}