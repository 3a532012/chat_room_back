import http from 'http'
import { Server } from 'socket.io'
import {Request, Response} from "express";

abstract class Sockets {
    public io:Server;
    constructor(server:http.Server, name:string) {
        this.io = new Server(server, {path: name})
    }
    protected abstract connect(req: Request, res: Response) :void;
    protected abstract disconnect(req: Request, res: Response) :void;
}
export default Sockets;