import { lampWidget } from './scripts/lighter';
import './lesson_10_hw.scss';

const itemLightHtmlElements = document.querySelectorAll('.bulb-lighter');

  for(let i = 0; i < itemLightHtmlElements.length; i++) {
  lampWidget(itemLightHtmlElements[i]);
};


const accordion = document.querySelector('#accordion')
accordion.addEventListener('click', toggleAccordion)
const accordionHeaders = accordion.querySelectorAll('.item__header');

function toggleAccordion(e) {
  const itemHeader = e.target.closest('.item__header')
  if (itemHeader) {
      itemHeader.parentNode.classList.toggle('item--open')
      toggleOtherItems(itemHeader)
  }
}function toggleOtherItems(accordionHeader) {
  Array.from(accordionHeaders).forEach(header => {
      if (header != accordionHeader) {
          header.parentNode.classList.remove('item--open')
      }
  });
}


