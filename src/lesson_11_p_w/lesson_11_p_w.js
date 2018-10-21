import { trafficLighter } from './scripts/traffic-lighter';

import './lesson_11_p_w.scss';

const lightersHtmlElements = document.querySelectorAll('.traffic-lighter');

for(let i = 0; i < lightersHtmlElements.length; i++) {
  trafficLighter(lightersHtmlElements[i]);
}

import { dropDownDynamic } from './scripts/drop-down-dynamic';

dropDownDynamic('#dropDownLanguages', ['ENGLISH', 'GERMANY', 'ITALIAN', 'TURKISH']);
dropDownDynamic('#dropDownCurrencies', ['USD', 'EUR', 'CAD', 'UHR', 'FRA']);


import {dropDown, tab} from './scripts/drop-down';


tab('#tabMenu1');
tab('#tabMenu2');
tab('#tabMenu3');