export class Board {

    constructor(score, sum, balls = []) {
        this.score = score;
        this.sum = sum;
        this.balls = balls;
    }

    addBall(ball) {
        this.balls.push(ball);
    }

    getBalls() {
        return this.balls;
    }

    getLastBall() {
        return this.balls[this.balls.length - 1];
    }

    getBallCount() {
        return this.balls.length;
    }

    getScore() {
        return this.score;
    }

    getSum() {
        return this.sum;
    }
}