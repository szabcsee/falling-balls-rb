import {NumberDisplay} from "./NumberDisplay.js";

export class SumDisplay extends NumberDisplay {
    constructor(number) {
        super('numberDisplay', 'sum', number);
        this.number = number;
    }

    createElement(elementType) {
        super.createElement(elementType);
        this.element.innerHTML = 'Sum: ' + this.number;
    }
}