'use client';

import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { MessageSquare, Plus, Settings, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Chat {
  id: string;
  title: string;
  lastMessage?: string;
  timestamp: Date;
}

interface AppSidebarProps {
  currentChatId?: string;
  onChatSelect: (chatId: string) => void;
  onNewChat: () => void;
}

export function AppSidebar({ currentChatId, onChatSelect, onNewChat }: AppSidebarProps) {
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      title: '패션 추천 채팅',
      lastMessage: '안녕하세요! 패션 아이템 추천을 도와드릴게요.',
      timestamp: new Date(),
    },
  ]);

  return (
    <Sidebar className="border-r border-gray-200 ">
      <SidebarHeader className="p-4 bg-[#F1FAFB]">
        <Button
          onClick={onNewChat}
          className="w-full bg-[#4993FA] hover:bg-[#3A7BD8] text-white flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />새 채팅
        </Button>
      </SidebarHeader>

      <SidebarContent className="bg-[#F1FAFB]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600">최근 채팅</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chats.map((chat) => (
                <SidebarMenuItem key={chat.id}>
                  <SidebarMenuButton
                    onClick={() => onChatSelect(chat.id)}
                    isActive={currentChatId === chat.id}
                    className="flex flex-col items-start p-3 hover:bg-[#F1FAFB] rounded-lg"
                  >
                    <div className="flex items-center gap-2 w-full">
                      <MessageSquare className="w-4 h-4 text-[#4993FA]" />
                      <span className="font-medium text-sm truncate">{chat.title}</span>
                    </div>
                    {chat.lastMessage && (
                      <p className="text-xs text-gray-500 mt-1 truncate w-full">{chat.lastMessage}</p>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 bg-[#F1FAFB]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <Settings className="w-4 h-4" />
              설정
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
