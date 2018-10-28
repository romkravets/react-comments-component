import { tabs } from './scripts/tabs';
import { Toggler } from './scripts/toggler';

import './lesson_13.scss';
import { TogglerControl } from './scripts/togglerControl';

tabs(document.querySelector('#firstTabs'), [
  {
    title: 'Section 1',
    content: 'test-test 1'
  },
  {
    title: 'Section 2',
    content: 'test-0test 2'
  }
]);
tabs(document.querySelector('#secondTabs'), [
  {
    title: 'Section 1',
    content: 'test 1'
  },
  {
    title: 'Section 2',
    content: 'test 2'
  }
]);

const t = new Toggler(document.querySelector('#togglerFirst'), 'HELLO WORLD!', 'green');
const u = new Toggler(document.querySelector('#togglerSecond'), 'HELLO WORLD 2!');
// t.render();
console.log(t);
console.log(u);

const globalController = new TogglerControl(document.querySelector('#togglerController'));
console.dir(globalController);
