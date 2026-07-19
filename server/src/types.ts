import { WebSocket } from "ws";

export interface User {
  socket: WebSocket;
  username: string;
  room: string;
}

export interface ChatMessage {
  username: string;
  room: string;
  message: string;
  createdAt: Date;
}