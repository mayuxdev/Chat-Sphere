import express from "express";
import { WebSocketServer } from "ws";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./db.js";
import Message from "./models/Message.js";
import type { User } from "./types.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on ${process.env.PORT}`);
});

const wss = new WebSocketServer({ server });

const users: User[] = [];

wss.on("connection", (socket) => {
  console.log("✅ User Connected");

  socket.on("message", async (data) => {
    const parsed = JSON.parse(data.toString());

    if (parsed.type === "join") {
      users.push({
        socket,
        username: parsed.payload.username,
        room: parsed.payload.room,
      });

      return;
    }

    if (parsed.type === "chat") {
      const sender = users.find((u) => u.socket === socket);

      if (!sender) return;

      const newMessage = await Message.create({
        username: sender.username,
        room: sender.room,
        message: parsed.payload.message,
      });

      users.forEach((user) => {
        if (user.room === sender.room) {
          user.socket.send(
            JSON.stringify({
              username: sender.username,
              message: newMessage.message,
              createdAt: newMessage.createdAt,
            })
          );
        }
      });
    }
  });

  socket.on("close", () => {
    const index = users.findIndex((u) => u.socket === socket);

    if (index !== -1) {
      users.splice(index, 1);
    }

    console.log("❌ User Disconnected");
  });
});