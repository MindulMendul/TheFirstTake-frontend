import { useState } from 'react';
import { MessageSquare, Plus, Settings, ChevronRight } from 'lucide-react';
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [chats] = useState<Chat[]>([
    {
      id: '1',
      title: '패션 추천 채팅',
      lastMessage: '안녕하세요! 패션 아이템 추천을 도와드릴게요.',
      timestamp: new Date(),
    },
  ]);

  return (
    <div
      className={`bg-white border-r border-gray-200 flex transition-all duration-300 ease-in-out ${
        isExpanded ? 'w-72' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Collapsed content - always visible */}
      <div className="w-16 h-full flex flex-col items-center py-4 flex-shrink-0">
        <Button onClick={onNewChat} className="w-10 h-10 p-0 bg-[#4993FA] hover:bg-[#3A7BD8] text-white mb-4">
          <Plus className="w-5 h-5" />
        </Button>

        <div className="flex-1 flex flex-col gap-2">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onChatSelect(chat.id)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                currentChatId === chat.id ? 'bg-[#4993FA] text-white' : 'hover:bg-[#F1FAFB] text-[#4993FA]'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
            </button>
          ))}
        </div>

        <button className="w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      {/* Expanded content - shows when expanded */}
      <div
        className={`w-56 h-full transition-all duration-300 ease-in-out ${
          isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'
        }`}
      >
        <div className="p-4">
          <Button
            onClick={onNewChat}
            className="w-full bg-[#4993FA] hover:bg-[#3A7BD8] text-white flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />새 채팅
          </Button>
        </div>

        <div className="px-4">
          <div className="mb-2">
            <span className="text-gray-600 text-sm">최근 채팅</span>
          </div>
          <div className="space-y-1">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onChatSelect(chat.id)}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  currentChatId === chat.id ? 'bg-[#4993FA] text-white' : 'hover:bg-[#F1FAFB]'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <MessageSquare className="w-4 h-4 text-[#4993FA]" />
                  <span className="font-medium text-sm truncate">{chat.title}</span>
                </div>
                {chat.lastMessage && <p className="text-xs text-gray-500 truncate">{chat.lastMessage}</p>}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-16 right-4">
          <button className="w-full flex items-center gap-2 text-gray-600 hover:text-gray-800 p-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-4 h-4" />
            설정
          </button>
        </div>
      </div>
    </div>
  );
}
