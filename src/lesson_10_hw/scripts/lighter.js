export function lampWidget(element) {

    const initBtn = element.querySelector('.bulb-lighter__btn');
    const  itemLight = element.querySelector('.bulb-lighter__item');

    initBtn.addEventListener("click", function(){
      itemLight.classList.toggle('active');
    });
  };
