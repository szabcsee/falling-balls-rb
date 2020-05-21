import {Application} from "./controller/Application.js";
import {Score} from "./model/entities/Score.js";
import {Sum} from "./model/entities/Sum.js";
import {Board} from "./model/entities/Board.js";



const score = new Score(0);
const sum = new Sum(0);
const board = new Board(score, sum, []);

const application = new Application(board);

application.renderView();
application.setupEventHandlers();