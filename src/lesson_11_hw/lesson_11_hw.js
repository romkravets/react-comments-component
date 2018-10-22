import './lesson_11_hw.scss';

window.onload = function() {
  const links = document.querySelectorAll('.tab-menu__link');
  const content = document.querySelectorAll('.tab-menu__item');

  for (let i = 0; i < links.length; i++) {
      (function(i){
          let link = links[i];
          link.addEventListener ('click', function() {
            for (let j = 0; j < content.length ; j++) {
                let shown = window.getComputedStyle(content[j]).display;
                if (shown == "block") {
                    content[j].style.display = "none";
                    links[j].classList.remove('tab-menu__link_active');
                }
            }
            content[i].style.display = "block";
            links[i].classList.add('tab-menu__link_active');
        })
      })(i);
  }
}