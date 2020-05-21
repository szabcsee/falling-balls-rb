export class Ball {

    /**
     *
     * @param position
     * @param color
     */
    constructor(position, colour) {
        this.position = position;
        this.colour = colour;
    }

    /**
     *
     * @returns int
     */
    getPosition() {
        return this.position;
    }

    /**
     *
     * @returns string
     */
    getColour() {
        return this.colour.getColour();
    }
}