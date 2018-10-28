import { Toggler } from "./toggler";

export class TogglerControl {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.togglers = [];
    this.render();
  }

  render() {
    this.addBtn = document.createElement('button');
    this.enableAllBtn = document.createElement('button');
    this.contentBlock = document.createElement('div');
    this.counterElement = document.createElement('span');

    this.addBtn.textContent = 'ADD';
    this.enableAllBtn.textContent = 'TOGGLE ALL';
    this.counterElement.textContent = 0;
    this.contentBlock.classList.add('div');

    this.addBtn.addEventListener('click', () => this.addToggler());
    this.enableAllBtn.addEventListener('click', () => this.toggleAll());

    this.rootElement.appendChild(this.addBtn);
    this.rootElement.appendChild(this.enableAllBtn);
    this.rootElement.appendChild(this.counterElement);

    this.rootElement.appendChild(this.contentBlock);
  }

  addToggler() {
    this.togglers.push(new Toggler(this.contentBlock, 'TEST', this.generateColor()));
    this.counterElement.textContent = this.togglers.length;
  }

  toggleAll() {
    let isSomeEnabled = false;
    this.togglers.forEach((toggler) => {
      if(toggler.isEnable) {
        isSomeEnabled = true; 
      }
    });

    if (isSomeEnabled) {
      this.disableAll();
    } else {
      this.enableAll();
    }
  }

  disableAll() {
    this.togglers.forEach((toggler) => {
      toggler.disable();
    })
  }

  enableAll() {
    this.togglers.forEach((toggler) => {
      toggler.enable();
    })
  }

  generateColor() {
    const getRandValue = () => Math.round(Math.random() * (0 - 255) + 255);

    return `rgb(${getRandValue()}, ${getRandValue()}, ${getRandValue()})`;
  }
}