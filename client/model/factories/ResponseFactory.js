import {Response} from "../entities/Response.js";

export class ResponseFactory {

    constructor() {

    }

    build(responseText){
        return new Response(responseText);
    }
}