import SocketAbstract from './SocketAbstract'
import http from 'http'
import {Request, Response} from "express";

class ChatRoomSocket extends SocketAbstract{

    constructor(server:http.Server, name: string){
        super(server, name)
    }
    connect(req: Request, res: Response) {
        res.send('connect')
    }
    disconnect(req: Request, res: Response) {
        res.send('leave');
    }
    
}

export default ChatRoomSocket