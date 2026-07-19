"use client";

import { useEffect, useRef, useState } from "react";
import { Message } from "@/types/message";

const WS_URL = process.env.NEXT_PUBLIC_WS_URL!;

export function useSocket(room: string, username: string) {
  const socketRef = useRef<WebSocket | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (!username) return;

    const socket = new WebSocket(WS_URL);

    socketRef.current = socket;

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "join",
          payload: {
            username,
            room,
          },
        })
      );
    };

    socket.onmessage = (event) => {
      const message: Message = JSON.parse(event.data);

      setMessages((prev) => [...prev, message]);
    };

    return () => {
      socket.close();
    };
  }, [room, username]);

  function sendMessage(message: string) {
    if (
      !socketRef.current ||
      socketRef.current.readyState !== WebSocket.OPEN
    ) {
      return;
    }

    socketRef.current.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message,
        },
      })
    );
  }

  return {
    messages,
    setMessages,
    sendMessage,
  };
}