import {BaseElement} from "./BaseElement.js";

export class NumberDisplay extends BaseElement {
    constructor(className, id, number) {
        super(className, id);
        this.elementType = 'span';
        this.number = number;
    }

    createElement(elementType) {
        super.createElement(elementType);
        this.element.innerHTML = this.number;
    }
}