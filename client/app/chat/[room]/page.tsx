"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { useSocket } from "@/hooks/useSocket";
import { getMessages } from "@/lib/api";

import ChatHeader from "@/components/ChatHeader";
import ChatInput from "@/components/ChatInput";
import ChatMessage from "@/components/ChatMessage";

import type { Message } from "@/types/message";

export default function ChatPage() {
  const { room } = useParams<{ room: string }>();

  const router = useRouter();

  const [username, setUsername] = useState("");

  const {
    messages,
    setMessages,
    sendMessage,
  } = useSocket(room, username);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    if (!storedUsername) {
      router.replace("/");
      return;
    }

    setUsername(storedUsername);

    async function loadMessages() {
      try {
        const data = await getMessages(room);
        setMessages(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadMessages();
  }, [room, router, setMessages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <main className="flex h-screen flex-col bg-zinc-950">

      <ChatHeader room={room} />

      <section className="flex-1 overflow-y-auto p-6">

        <div className="mx-auto max-w-4xl space-y-4">

          {messages.map((message: Message) => (
            <ChatMessage
              key={message._id}
              message={message}
              isOwn={message.username === username}
            />
          ))}

          <div ref={bottomRef} />

        </div>

      </section>
             
      <ChatInput 
      //@ts-ignore
      sendMessage={sendMessage} />

    </main>
  );
}