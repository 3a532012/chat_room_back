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
const io = new ChatRoomSocket(server, { path: '/chat_room', transports :['polling', 'websocket'], cors: {
  origin: ['http://127.0.0.1:5173']
} });


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

// load router
for (const route of router) {
    app.use(route.getRouter());
}
server.listen(3000)
module.exports = app;