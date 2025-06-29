"use client";
import ChatWindow from "@/components/chatComponents/chatWindow";
import Sidebar from "@/components/chatComponents/sidebar";
import MaxFullWidthWrapper from "@/components/global/max-full-width-wrapper";
import React, { useState } from "react";

const chatList = [
  {
    name: "Grace Miller",
    time: "10:25 AM",
    preview: "Can't wait for the weekend!",
    image: "/images/home/courses/stu1.png",
    unread: false,
    active: false,
  },
  {
    name: "Lucas Williams",
    time: "10:30 AM",
    preview: "Hey, how’s it going?",
    image: "/images/home/courses/stu2.png",
    unread: true,
    active: false,
  },
];

const ChatApp = () => {
  const [selectedChat, setSelectedChat] = useState(chatList[0]); // default open

  return (
    <MaxFullWidthWrapper className="flex h-screen">
      <Sidebar chatList={chatList} selectedChat={selectedChat} onSelectChat={setSelectedChat} />
      <ChatWindow selectedChat={selectedChat} />
    </MaxFullWidthWrapper>
  );
};

export default ChatApp;
