import {Request, Response} from "express";

class MessageController {
    echo(req: Request, res: Response) {
        res.send('echo');
    }
}

export default MessageController;