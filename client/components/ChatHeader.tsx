interface Props {
  room: string;
}

export default function ChatHeader({
  room,
}: Props) {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900">

      <div className="mx-auto flex max-w-4xl items-center justify-between p-4">

        <h1 className="text-2xl font-bold text-white">
          💬 ChatSphere
        </h1>

        <div className="flex items-center gap-2">

          <span className="h-3 w-3 rounded-full bg-green-500" />

          <p className="text-sm text-zinc-300">
            Room: {room}
          </p>

        </div>

      </div>

    </header>
  );
}