import { ChatUser, SidebarProps } from "@/types/chat";
import { Search } from "lucide-react";
import Image from "next/image";

const Sidebar = ({ chatList, selectedChat, onSelectChat }:SidebarProps) => {
  return (
    <div className="w-[300px] border-r bg-white flex flex-col text-[var(--primary-text)]">
      <div className="p-4 border-b font-bold text-lg text-orange-600">Chat Buddies</div>

      <div className="p-3">
        <div className="flex items-center border rounded-full px-3 py-2">
          <Search className="text-gray-800 w-4 h-4" />
          <input
            type="text"
            placeholder="Search messages, people"
            className="ml-2 w-full focus:outline-none text-sm"
          />
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        <p className="text-xs text-gray-500 px-4 mb-2">PINNED CHATS</p>
        {chatList.map((chat:ChatUser, i:number) => (
          <div
            key={i}
            onClick={() => onSelectChat(chat)}
            className={`flex items-center p-3 hover:bg-orange-100 cursor-pointer ${
              selectedChat.name === chat.name ? "bg-orange-100" : ""
            }`}
          >
            <Image src={chat.image} alt="Profile" width={80} height={80} className="w-10 h-10 rounded-full mr-3" />
            <div className="flex-1">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{chat.name}</span>
                <span className="text-gray-400 text-xs">{chat.time}</span>
              </div>
              <div className="text-xs text-gray-500 truncate">{chat.preview}</div>
            </div>
            {chat.unread && (
              <span className="ml-2 w-5 h-5 text-xs bg-orange-500 text-white rounded-full flex items-center justify-center">
                1
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
