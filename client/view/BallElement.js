import {BaseElement} from "./BaseElement.js";

export class BallElement extends BaseElement {

    constructor(className, id) {
        super(className, id);
        this.elementType = 'li';
    }
}