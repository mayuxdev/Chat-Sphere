import { Message } from "@/types/message";

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getMessages(room: string): Promise<Message[]> {
  const res = await fetch(`${API_URL}/messages/${room}`);

  if (!res.ok) {
    throw new Error("Failed to fetch messages");
  }

  return res.json();
}