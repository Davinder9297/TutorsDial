import { ChatUser } from "@/types/chat";
import MessageBubble from "./messageBubble";
import MessageInput from "./messageInput";
import Image from "next/image";

const ChatWindow = ({ selectedChat }: { selectedChat: ChatUser }) => {
      return (
    <div className="flex-1 flex flex-col bg-[#f9f9f9] text-[var(--primary-text)] pb-20">
      <div className="p-4 flex items-center border-b">
        <Image src={selectedChat.image} alt="profile" width={80} height={80} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <h4 className="font-medium">{selectedChat.name}</h4>
          <span className="text-xs text-green-500">Online</span>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-4 relative overflow-y-auto ">
        <p className="text-sm text-gray-500">Chat with {selectedChat.name} goes here...</p>
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
        <MessageBubble from="them" time="10:30 AM" name="Grace Miller">
          Hi Jack! I&apos;m doing well, thanks. Can&apos;t wait for the weekend!
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM" name="Jack Raymonds">
          I know, right? Weekend plans are the best. Any exciting plans on your end?
        </MessageBubble>
        <MessageBubble from="them" time="10:30 AM">
          Absolutely! I&apos;m thinking of going for a hike on Saturday. How about you?
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM">
          Might catch up on some reading and hang out with friends Sunday.
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM">
          Might catch up on some reading and hang out with friends Sunday.
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM">
          Might catch up on some reading and hang out with friends Sunday.
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM">
          Might catch up on some reading and hang out with friends Sunday.
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM">
          Might catch up on some reading and hang out with friends Sunday.
        </MessageBubble>
        <MessageBubble from="me" time="10:30 AM">
          Might catch up on some reading and hang out with friends Sunday.
        </MessageBubble>
      </div>
      <MessageInput />
      </div>
    </div>
  );
};

export default ChatWindow;
