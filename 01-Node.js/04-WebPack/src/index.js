import Component from './scripts/component';
import HeaderComponent from './scripts/headerComponent';
import FooterComponent from './scripts/footerComponent';
import ListOfBlocks from './scripts/listOfBlocks';
import BlockComponent from './scripts/blockComponent';

import hawai from './images/hawai.jpg';
import peperoni from './images/peperoni.jpg';
import margarita from './images/margarita.jpg';

function init() {
    let headerComponent = new HeaderComponent('Header');
    let footerComponent = new FooterComponent('Footer');

    let blockList = [new BlockComponent('hawai', hawai), new BlockComponent('peperoni', peperoni), new BlockComponent('margarita', margarita), new BlockComponent('margarita', margarita)];

    let listOfBlocks = new ListOfBlocks(blockList);

    let element = new Component('div', [headerComponent, listOfBlocks, footerComponent]);

    document.getElementById('app').appendChild(element.render());
}

document.onload = init();