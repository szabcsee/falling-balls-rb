import {NumberDisplay} from "./NumberDisplay.js";

export class ScoreDisplay extends NumberDisplay {
    constructor(number) {
        super('numberDisplay', 'score', number);
        this.number = number;
    }

    createElement(elementType) {
        super.createElement(elementType);
        this.element.innerHTML = 'Score: ' +  this.number;
    }
}