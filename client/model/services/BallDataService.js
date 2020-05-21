import {Ball} from "../entities/Ball";
import {Request} from "../entities/Request";
import {Response} from "../entities/Response";

export class BallDataService {

    constructor() {

    }

    requestNextBallData(ballCount) {

    }

    getNextPosition() {
        return this.balls.length + 1;
    }
}