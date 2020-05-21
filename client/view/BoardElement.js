import {BaseElement} from "./BaseElement.js";

export class BoardElement extends BaseElement {
    constructor(className, id) {
        super(className, id);
        this.elementType = 'ul';
    }
}