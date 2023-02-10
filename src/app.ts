// import express from "express";
// import * as http from "http";
// import * as socketio from "socket.io";

// const app = express();

// app.get("/", (_req, res) => {
//   res.send({ uptime: process.uptime() });
// });

// const server = http.createServer(app);
// const io = new socketio.Server(server);

// io.on("connection", (...params) => {
//   console.log(params);
// });

// server.listen(4004, () => {
//   console.log("Running at localhost:4004");
// });




import express from 'express';
import {router} from "./routes";
import http from 'http'
import ChatRoomSocket from './socket/ChatRoomSocket';

const app: express.Application = express();
const server: http.Server = http.createServer(app)
const io = new ChatRoomSocket(server, { path: '/chat_room' });


// ChatRoomSocket(server,'/chat_room')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// load router
for (const route of router) {
    app.use(route.getRouter());
}
server.listen(3000)
module.exports = app;