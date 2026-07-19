import { WebSocket } from "ws";

export interface User {
  socket: WebSocket;
  username: string;
  room: string;
}