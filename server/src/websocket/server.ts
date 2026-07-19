import { Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import Message from "../models/Message.js";
import type {
  IncomingMessage,
  User,
} from "../types/websocket.js";

const users = new Map<WebSocket, User>();

export function initializeWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (socket) => {
    console.log("🟢 New Connection");

    socket.on("message", async (rawData) => {
      try {
        const data: IncomingMessage = JSON.parse(rawData.toString());

        switch (data.type) {
          case "join": {
            users.set(socket, {
              socket,
              username: data.payload.username,
              room: data.payload.room,
            });

            console.log(
              `${data.payload.username} joined ${data.payload.room}`
            );

            break;
          }

          case "chat": {
            const sender = users.get(socket);

            if (!sender) return;

            const savedMessage = await Message.create({
              username: sender.username,
              room: sender.room,
              message: data.payload.message,
            });

            const outgoing = JSON.stringify(savedMessage);

            users.forEach((user) => {
              if (
                user.room === sender.room &&
                user.socket.readyState === WebSocket.OPEN
              ) {
                user.socket.send(outgoing);
              }
            });

            break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    });

    socket.on("close", () => {
      users.delete(socket);
      console.log("🔴 Connection Closed");
    });
  });
}