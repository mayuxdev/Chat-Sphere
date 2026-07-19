"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("general");

const joinChat = () => {
  if (!username.trim()) return;

  localStorage.setItem("username", username);

  router.push(`/chat/${room}`);
};

  return (
    <main className="flex h-screen items-center justify-center bg-zinc-950">
      <div className="w-[420px] rounded-2xl bg-zinc-900 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          💬 ChatSphere
        </h1>

        <p className="mt-2 text-center text-zinc-400">
          Real-time Room Chat
        </p>

        <input
          placeholder="Username"
          className="mt-8 w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="mt-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 p-3 text-white"
        >
          <option value="general">General</option>
          <option value="tech">Tech</option>
          <option value="random">Random</option>
        </select>

        <button
          onClick={joinChat}
          className="mt-8 w-full rounded-lg bg-purple-600 p-3 font-semibold text-white transition hover:bg-purple-700"
        >
          Join Chat 🚀
        </button>

      </div>
    </main>
  );
}