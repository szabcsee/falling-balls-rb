import {BaseElement} from "./BaseElement.js";

export class Button extends BaseElement {
    constructor(className, id, buttonText) {
        super(className, id);
        this.elementType = 'button';
        this.buttonText = buttonText;
    }

    createElement(elementType) {
        super.createElement(elementType);
        this.element.innerHTML = this.buttonText;
    }
}