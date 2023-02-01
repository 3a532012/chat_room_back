import {Request, Response} from "express";

class CommonController {
    notFound(req: Request, res: Response) {
        res.send('notFound');
    }
}

export default CommonController;