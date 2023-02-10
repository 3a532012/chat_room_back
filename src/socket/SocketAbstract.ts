import http from 'http'
import { Server,ServerOptions,Socket } from 'socket.io'

abstract class Sockets {
    public io:Server;
    constructor(server:http.Server, options?:Partial<ServerOptions>) {
        this.io = new Server(server, options)
        this.io.on("connect", this.connect)
        this.io.on("disconnect", this.disconnect)
    }
    protected abstract connect(socket:Socket) :void;
    protected abstract disconnect(socket:Socket) :void;
}
export default Sockets;


