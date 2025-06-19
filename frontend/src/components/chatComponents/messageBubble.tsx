const MessageBubble = ({
  children,
  from,
  time,
  name,
}: {
  children: React.ReactNode;
  from: "me" | "them";
  time?: string;
  name?: string;
}) => {
  const isMe = from === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[70%] ${isMe ? "text-right" : "text-left"}`}>
        {name && <p className="text-xs text-gray-500 mb-1">{time} {name}</p>}
        <div
          className={`rounded-lg px-4 py-2 text-sm ${
            isMe
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-800 shadow-sm"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
