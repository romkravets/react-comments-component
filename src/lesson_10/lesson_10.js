import './lesson_10.scss';


function lampWidget(element) {

  const initBtn = element.querySelector('.bulb-lighter__btn');
  const  itemLight = element.querySelector('.bulb-lighter__item');

  initBtn.addEventListener("click", function(){
    itemLight.classList.toggle('active');
  });

}

const itemLightHtmlElements = document.querySelectorAll('.bulb-lighter');

for(let i = 0; i < itemLightHtmlElements.length; i++) {
lampWidget(itemLightHtmlElements[i]);
}

/*const panelItem = document.querySelectorAll('.accordion__panel-title');
const active = document.getElementsByClassName('accordion__panel-active');
console.log(panelItem);
console.log(active);

Array.from(panelItem).forEach(function(item, i, panelItem) {
item.addEventListener('click', function(e) {
  if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
    active[0].classList.remove('accordion__panel-active'); // убрать класс panel-active

  // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
  this.classList.toggle('accordion__panel-active');
});
});*/

var panelItem = document.querySelectorAll('.panel-title'),
  active = document.getElementsByClassName('panel-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('panel-active'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('panel-active');
  });
});

