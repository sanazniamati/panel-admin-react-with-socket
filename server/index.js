/** @format */

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`user connected : ${socket.id}`);

  socket.on("send-Message", (data) => {
    // TODO
    socket.broadcast.emit("receive_message", data);
    console.log(data);
  });
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
