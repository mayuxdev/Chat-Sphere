import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";

import { connectDB } from "./config/db.js";
import { initializeWebSocket } from "./websocket/server.js";

import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/messages", messageRoutes);

await connectDB();

const server = http.createServer(app);

initializeWebSocket(server);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`🚀 Server Running On ${PORT}`);
});