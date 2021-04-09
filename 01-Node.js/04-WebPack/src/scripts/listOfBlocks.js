import Component from './component';

import '../styles/block.css';

class ListOfBocks extends Component {
    constructor(blocks) {
        super();

        this.blocks = blocks;
    }

    render() {
        let blocksEl = new Component('div', this.blocks, { className: 'blocks' });

        return blocksEl.render();
    }
}

export default ListOfBocks;