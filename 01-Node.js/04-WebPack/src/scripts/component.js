class Component {
    constructor(tag, childs, params = undefined) {
        this.tag = tag;
        this.childs = childs;
        this.params = params;
    }

    render() {
        let element = document.createElement(this.tag);

        if (this.params) {
            Object.keys(this.params).forEach((param) => {
                element[param] = this.params[param];
            })
        }

        this.childs.forEach(child => {
            if (child.render) {
                element.appendChild(child.render());
            } else {
                element.appendChild(document.createTextNode(child));
            }
        });

        return element;
    }
}

export default Component;