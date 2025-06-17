'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Folder, X } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  description: string;
  tags: string[];
}

interface PhotoFolderProps {
  photos: Photo[];
}

export const PhotoFolder = ({ photos }: PhotoFolderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // 최대 9개의 썸네일만 표시
  const thumbnails = photos.slice(0, 9);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative border-[#4993FA] text-[#4993FA] hover:bg-[#4993FA] hover:text-white"
        >
          <Folder className="w-4 h-4 mr-2" />
          사진 폴더
          {photos.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#4993FA] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {photos.length}
            </span>
          )}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-6xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-[#4993FA]">사진 폴더</DialogTitle>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="absolute right-4 top-4">
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>

        {/* 폴더 미리보기 - 3x3 그리드 */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3 text-gray-600">폴더 미리보기</h3>
          <div className="w-32 h-32 bg-[#F1FAFB] rounded-lg border-2 border-dashed border-[#4993FA] p-2">
            <div className="grid grid-cols-3 gap-1 h-full">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="bg-white rounded border overflow-hidden">
                  {thumbnails[index] ? (
                    <img
                      src={thumbnails[index].url}
                      alt={thumbnails[index].description}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 전체 사진 갤러리 */}
        <ScrollArea className="max-h-96">
          <div className="grid grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative">
                <img
                  src={photo.url}
                  alt={photo.description}
                  className="w-full h-32 object-cover rounded-lg border shadow-sm group-hover:shadow-md transition-shadow"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="text-white text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity p-2">
                    <p className="font-medium">{photo.description}</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {photo.tags.map((tag) => (
                        <span key={tag} className="bg-[#4993FA] text-xs px-1 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {photos.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Folder className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>아직 저장된 사진이 없습니다.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
