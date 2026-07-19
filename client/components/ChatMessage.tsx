import type { Message } from "@/types/message";

interface Props {
  message: Message;
  isOwn: boolean;
}

export default function ChatMessage({
  message,
  isOwn,
}: Props) {
  return (
    <div
      className={`flex ${
        isOwn ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-sm rounded-xl p-4 ${
          isOwn
            ? "bg-violet-600 text-white"
            : "bg-zinc-800 text-white"
        }`}
      >
        <p className="text-xs font-semibold opacity-70">
          {message.username}
        </p>

        <p className="mt-1">
          {message.message}
        </p>

        <p className="mt-2 text-right text-[10px] opacity-60">
          {new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}