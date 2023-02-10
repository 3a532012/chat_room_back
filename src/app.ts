import express from 'express';
import {router} from "./routes";
import http from 'http'
import ChatRoomSocket from './socket/ChatRoomSocket';
import cors from 'cors'

const app: express.Application = express();
const server: http.Server = http.createServer(app)
const io = new ChatRoomSocket(server, { path: '/chat_room', cors: {
  origin: ['http://127.0.0.1:5173']
} });

app.use(cors())
// load router
for (const route of router) {
    app.use(route.getRouter());
}
server.listen(3000)
module.exports = app;