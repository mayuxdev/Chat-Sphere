import type WebSocket from "ws";

export interface User {
  socket: WebSocket;
  username: string;
  room: string;
}

export interface IncomingJoinMessage {
  type: "join";
  payload: {
    username: string;
    room: string;
  };
}

export interface IncomingChatMessage {
  type: "chat";
  payload: {
    message: string;
  };
}

export type IncomingMessage =
  | IncomingJoinMessage
  | IncomingChatMessage;