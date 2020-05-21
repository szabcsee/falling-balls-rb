import {Container} from '../view/Container.js';
import {Toolbar} from "../view/Toolbar.js";
import {Button} from "../view/Button.js";
import {SumDisplay} from "../view/SumDisplay.js";
import {ScoreDisplay} from "../view/ScoreDisplay.js";
import {SendRequestService} from "../model/services/SendRequestService.js";
import {Request} from "../model/entities/Request.js";
import {Colour} from "../model/entities/Colour.js";
import {Ball} from "../model/entities/Ball.js";
import {BoardElement} from "../view/BoardElement.js";
import {BallElement} from "../view/BallElement.js";
import {ResponseFactory} from "../model/factories/ResponseFactory.js";

export class Application {

    constructor(board) {
        const responseFactory = new ResponseFactory();
        this.sendRequestService = new SendRequestService(responseFactory);
        this.board = board;
    }

    renderView() {
        const container = new Container('main', 'main');
        const toolbar = new Toolbar('toolbar', 'toolbar');
        const button = new Button('button', 'button', 'Drop');
        const board = new BoardElement('board', 'board');
        const sum = new SumDisplay(0);
        const score = new ScoreDisplay(0);

        container.appendToElement(document.getElementById('ballsApp'));
        toolbar.appendToElement(document.getElementById('main'));
        button.appendToElement(document.getElementById('toolbar'));
        sum.appendToElement(document.getElementById('toolbar'));
        score.appendToElement(document.getElementById('toolbar'));
        board.appendToElement(document.getElementById('main'));
    }

    setupEventHandlers() {
        document.getElementById('button').addEventListener('click', this.drop.bind(this));
    }

    drop() {
        let requestData = {
            ballCount: this.board.getBallCount()
        }
        let request = new Request('POST', '/next-ball', requestData);
        let response = this.sendRequestService.send(request);
        let responseData = response.getParsedResponse();
        let colour = new Colour(responseData.colour);
        let ball = new Ball(responseData.position, colour);

        this.updateBoardData(ball, responseData.score);
        this.updateView();
    }

    updateBoardData(ball, score) {
        this.board.addBall(ball);
        this.board.score.setValue(score);
        this.board.sum.setValue(this.board.getBallCount());
    }

    updateView() {
        let sum = document.getElementById('sum'),
            score = document.getElementById('score'),
            lastBall = this.board.getLastBall(),
            ballElement = new BallElement('ballElement ' + lastBall.getColour(), 'ballElement-' + lastBall.getPosition());

        sum.innerHTML = 'Sum: ' + lastBall.getPosition();
        score.innerHTML = 'Score: ' + this.board.score.getValue();

        ballElement.appendToElement(document.getElementById('board'));
    }

}