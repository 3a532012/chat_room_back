import SocketAbstract from './SocketAbstract'
import http from 'http'
import { ServerOptions,Socket } from 'socket.io'
import {Request, Response} from "express";

class ChatRoomSocket extends SocketAbstract{

    constructor(server:http.Server, options?: Partial<ServerOptions>){
        super(server, options)
    }
    connect(socket:Socket) {
        console.log(`back end socket connect socket ID: ${socket.id}`)
    }
    disconnect(socket:Socket) {
        console.log(`back end socket disconnect socket ID: ${socket.id}`)
    }
    
}

export default ChatRoomSocket