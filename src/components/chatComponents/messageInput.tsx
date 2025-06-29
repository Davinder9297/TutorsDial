import { Mic, Paperclip, Send } from "lucide-react";
import InputField from "../common/input";

const MessageInput = () => {
  return (
    <div className="p-4 bg-white flex items-center gap-3">
      <InputField title="message" placeholder="Type message..." className="flex-1 !rounded-full border focus:outline-none text-sm"/>
      <Mic className="text-gray-500 cursor-pointer" />
      <Paperclip className="text-gray-500 cursor-pointer" />
      <button className="bg-orange-500 text-white px-4 py-2 rounded-full flex items-center gap-1">
        Send <Send size={16} />
      </button>
    </div>
  );
};

export default MessageInput;
