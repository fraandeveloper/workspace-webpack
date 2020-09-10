import './base.scss';
import imgLogoBreakingBenjamin from './assets/images/breaking-benjamin.jpg';
class Generator {
  createParagraph(__string) {
    const textNode = document.createTextNode(__string);
    const paragraphElement = document.createElement('P');
    paragraphElement.appendChild(textNode);
    return paragraphElement;
  }

  createImg(__source, __width, __height) {
    const imgElement = new Image(__width, __height);
    imgElement.src = __source;
    return imgElement;
  }

  createDiv(__innerNode) {
    const divElement = document.createElement('DIV');
    if (__innerNode) {
      divElement.appendChild(__innerNode);
    }
    return divElement;
  }
}

const gen = new Generator;
const par = gen.createParagraph('Boo! ƪ(ړײ)ƪ');
const myImg = gen.createImg(imgLogoBreakingBenjamin, 500, 300);
const div = gen.createDiv(par);

div.appendChild(myImg);
console.log('This is my image address', imgLogoBreakingBenjamin);

document.body.appendChild(div);