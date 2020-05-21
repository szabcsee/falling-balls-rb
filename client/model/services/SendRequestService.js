import {Request} from "../entities/Request.js";
import {Response} from "../entities/Response.js";

export class SendRequestService {

    constructor(responseFactory) {
        this.responseFactory = responseFactory;
    }

    /**
     *
     * @param Request request
     */
    send(request) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.open(request.getMethod(), request.getUrl(), false);  // `false` makes the request synchronous
        httpRequest.send(JSON.stringify(request.getData()));
        if (httpRequest.status === 200) {
            return this.responseFactory.build(httpRequest.responseText);
        }
    }
}