import Component from './component';

import '../styles/block.css';

class BLockComponent extends Component {
    constructor(info, image) {
        super();

        this.info = info;
        this.image = image;
    }

    render() {
        let image = new Component('img', [], { src: this.image }, { className: 'block__img' });
        let info = new Component('p', [this.info], { className: 'block__info' });

        let block = new Component('div', [image, info], { className: 'block' });

        return block.render();
    }
}

export default BLockComponent;