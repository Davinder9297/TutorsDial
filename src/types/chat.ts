export interface ChatUser {
  name: string;
  time: string;
  preview: string;
  image: string;
  unread: boolean;
  active: boolean;
}

export interface SidebarProps {
  chatList: ChatUser[];
  selectedChat: ChatUser;
  onSelectChat: (chat: ChatUser) => void;
}