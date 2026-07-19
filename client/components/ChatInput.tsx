"use client";

import { useState } from "react";

interface Props {
  sendMessage: (message: string) => void;
}

export default function ChatInput({
  sendMessage,
}: Props) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    sendMessage(message);

    setMessage("");
  }

  return (
    <footer className="border-t border-zinc-800 bg-zinc-900">

      <div className="mx-auto flex max-w-4xl gap-3 p-4">

        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none"
        />

        <button
          onClick={handleSend}
          className="rounded-lg bg-violet-600 px-6 font-semibold text-white hover:bg-violet-700"
        >
          Send
        </button>

      </div>

    </footer>
  );
}