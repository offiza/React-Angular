import Component from './component';

import '../styles/header.css';

class HeaderComponent extends Component {
    constructor(content) {
        super();
        this.content = content;
    }

    render() {
        let content = new Component('h1', [this.content], { className: 'header__content' });

        let header = new Component('div', [content], { className: 'header' });

        return header.render();
    }
}

export default HeaderComponent;