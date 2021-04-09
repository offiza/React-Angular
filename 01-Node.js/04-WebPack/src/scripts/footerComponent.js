import Component from './component';

import '../styles/footer.css';

class FooterComponent extends Component {
    constructor(content) {
        super();

        this.content = content;
    }

    render() {
        let content = new Component('h1', [this.content], { className: 'footer__content' });

        let footer = new Component('div', [content], { className: 'footer' });

        return footer.render();
    }
}

export default FooterComponent;