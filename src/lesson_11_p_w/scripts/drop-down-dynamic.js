
/*export function dropDownDynamic(selector, options) {
  const menuParent = document.querySelector(selector);
  let btn;
  let lamp;

  function render() {
    btn = document.createElement('div');
    lamp = document.createElement('button');

    btn.classList.add('traffic-lighter');
    lamp.classList.add('traffic-lighter__lamp');

    menuParent.appendChild(btn);
    menuParent.appendChild(lamp);
  }

  function buttonList() {
    for (let i = 0; i < options.length; i++) {
      let li = document.createElement('li');
      let option = document.createElement('button');

      li.classList.add('drop-down-menu__item');
      option.classList.add('drop-down-menu__option');

      option.textContent = options[i];

      li.appendChild(option);
      lamp.appendChild(li);
    }
  }

  function close() {
    console.log('CLOSED');
    list.classList.remove('drop-down-menu__list_expand');
    document.removeEventListener('click', close)
  }

  function handleEvents() {
    list.addEventListener('click', function(event) {
      btn.textContent = event.target.textContent;
      list.classList.remove('drop-down-menu__list_expand');
      event.stopPropagation();
    });

    btn.addEventListener('click', function () {
      event.stopPropagation();

      if (list.classList.contains('drop-down-menu__list_expand')) {
        list.classList.remove('drop-down-menu__list_expand');
        document.removeEventListener('click', close)
      } else {
        list.classList.add('drop-down-menu__list_expand');
        document.addEventListener('click', close);
      }

    });
    render();
  }*/
  


  /*export function dropDown(selector) {
  const menuParent = document.querySelector(selector);
  const btn = menuParent.querySelector('.drop-down-menu__btn');
  const list = menuParent.querySelector('.drop-down-menu__list');
  const options = menuParent.querySelectorAll('.drop-down-menu__option');
  
  for (let i = 0; i < options.length; i++) {
    options[i].onclick = function () {
      btn.textContent = options[i].textContent;
      list.classList.remove('drop-down-menu__list_expand');
    }
  }

  btn.onclick = function () {
    list.classList.toggle('drop-down-menu__list_expand');
  };
}*/


export function tab(selector){
  const menuParent = document.querySelector(selector);
  const btn = menuParent.querySelector('.tab-container-menu__link');
  const list = menuParent.querySelector('.tab-container-menu__list');
  const content = menuParent.querySelector('.tab-container-menu__content');
  console.log(list);

  function clickBtn() {
    btn.addEventListener('click', function() {
      content.classList.toggle('tab-container-menu__content_expand')
    })
  };
  clickBtn();
}

  
  