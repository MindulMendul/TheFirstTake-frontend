'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AppSidebar } from '@/components/AppSidebar';
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  images?: string[];
}

interface Photo {
  id: string;
  url: string;
  description: string;
  tags: string[];
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요! 패션 아이템 추천을 도와드릴게요. 어떤 스타일을 찾고 계신가요?',
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [currentChatId, setCurrentChatId] = useState('1');

  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      url: `/cloth1.jpg`,
      description: '캐주얼 셔츠',
      tags: ['셔츠', '캐주얼'],
    },
    {
      id: '2',
      url: `/cloth2.jpg`,
      description: '데님 자켓',
      tags: ['자켓', '데님'],
    },
    {
      id: '3',
      url: `/cloth3.jpg`,
      description: '스니커즈',
      tags: ['신발', '스니커즈'],
    },
    {
      id: '4',
      url: `/cloth3.jpg`,
      description: '',
      tags: ['신발', '스니커즈'],
    },
  ]);

  const router = useRouter();

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // 시뮬레이션된 AI 응답
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
        images: inputValue.includes('추천') ? [`/cloth1.jpg`, `/cloth2.jpg`] : undefined,
      };
      setMessages((prev) => [...prev, aiMessage]);

      // 새로운 사진이 추천되면 photos 배열에 추가
      if (aiMessage.images) {
        const newPhotos = aiMessage.images.map((url, index) => ({
          id: `new-${Date.now()}-${index}`,
          url,
          description: `추천 아이템 ${index + 1}`,
          tags: ['추천', '패션'],
        }));
        setPhotos((prev) => [...prev, ...newPhotos]);
      }
    }, 1000);

    setInputValue('');
  };

  const getAIResponse = (userInput: string) => {
    if (userInput.includes('추천')) {
      return '이런 스타일은 어떠세요? 캐주얼하면서도 세련된 느낌의 아이템들을 추천드려요!';
    }
    return '좋은 선택이에요! 더 구체적으로 어떤 스타일을 원하시는지 알려주세요.';
  };

  const handleChatSelect = (chatId: string) => {
    setCurrentChatId(chatId);
  };

  const handleNewChat = () => {
    const newChatId = Date.now().toString();
    setCurrentChatId(newChatId);
    setMessages([
      {
        id: '1',
        text: '안녕하세요! 패션 아이템 추천을 도와드릴게요. 어떤 스타일을 찾고 계신가요?',
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full ">
        <AppSidebar currentChatId={currentChatId} onChatSelect={handleChatSelect} onNewChat={handleNewChat} />

        <SidebarInset className="flex flex-col">
          {/* 채팅 영역 */}
          <div className="flex-1">
            <ScrollArea className="h-[calc(100vh-200px)] p-4">
              <div className="space-y-4 max-w-[1024px] mx-auto">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[70%] p-6 rounded-lg ${
                        message.isUser ? 'bg-blue-500 text-beige-50' : 'bg-yellow-100 text-navy-800'
                      }`}
                    >
                      <p className="text-lg md:text-3xl">{message.text}</p>
                      {message.images && (
                        <div className="grid grid-cols-2 gap-2 mt-3">
                          {message.images.map((image, index) => (
                            <Image
                              key={index}
                              src={image}
                              alt={`추천 아이템 ${index + 1}`}
                              className="w-full h-full object-cover rounded"
                              width={250}
                              height={250}
                            />
                          ))}
                        </div>
                      )}
                      <p className="text-xs opacity-70 mt-2">{message.timestamp.toLocaleTimeString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* 입력 영역 */}
            <div
              // 1. 부모 컨테이너를 Flexbox로 만듭니다.
              className="
              shrink-0
    flex flex-col items-end gap-2 w-full max-w-[1024px] mx-auto 
    bg-white dark:bg-blue-800 
    rounded-2xl border border-blue-500 dark:border-blue-800 
    focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-800
    transition-all duration-200
    p-2
  "
            >
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="패션에 대해 마음대로 물어보세요!"
                className="
      flex-1 bg-transparent resize-none
      min-h-[48px] max-h-[80px]
      text-3xl
      px-5 py-3
      border-none focus-visible:border-0 focus:outline-none focus:ring-0
      dark:text-white
    "
                rows={1}
              />
              <Button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className="
      flex-shrink-0 /* 3. 버튼은 공간이 부족해도 찌그러지지 않습니다. */
      flex items-center justify-center
      w-16 h-16 rounded-full
      bg-blue-500 text-white 
      hover:bg-blue-600
      disabled:bg-slate-300 disabled:dark:bg-slate-600 disabled:cursor-not-allowed
      transition-all duration-200
      mb-1 /* 세로 정렬 미세 조정 */
    "
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
