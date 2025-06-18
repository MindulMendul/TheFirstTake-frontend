'use client';

import { useRouter } from 'next/navigation';
import { Heart, Share, Star, ShoppingBag, Award } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center py-16 border-b border-gray-100">
          <div className="inline-flex items-center px-6 py-2 border border-[#27548A] text-[#27548A] rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            AI CURATOR'S CHOICE
          </div>
          <h1 className="text-5xl font-light text-gray-900 mb-4">Editorial Pick</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">AI가 당신을 위해 엄선한 이번 시즌 베스트 아이템</p>
        </div>

        <div className="my-16 bg-white flex items-center justify-center">
          <div className="mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              {/* Image */}

              <Image
                src="/cloth1.jpg"
                alt="하늘색 옥스포드 셔츠"
                className="w-full h-[70vh] object-cover"
                width={600}
                height={1000}
              />

              {/* Content */}
              <div className="space-y-10 max-w-xl">
                <div className="space-y-6">
                  <div>
                    <div className="text-xs font-medium text-[#27548A] mb-2 tracking-widest">MINDUL</div>
                    <h1 className="text-4xl font-light text-gray-900 mb-4">가을 웜톤 베이지 코트</h1>
                    <div className="flex items-center mb-6">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-gray-500 ml-3 text-sm">4.8 (1,247)</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-3xl font-light text-gray-900">₩49,900</div>
                    <div className="text-gray-600">Medium · 무료배송 · 30일 무료 반품</div>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    클래식한 옥스포드 셔츠의 현대적 해석. 부드러운 하늘색 톤이 어떤 피부톤과도 완벽하게 어우러지며,
                    캐주얼한 일상부터 세미 포멀한 자리까지 다양하게 활용할 수 있는 만능 아이템입니다.
                  </p>

                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-gray-500 text-xs mb-1">소재</div>
                      <div className="text-gray-900">100% 코튼</div>
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs mb-1">핏</div>
                      <div className="text-gray-900">레귤러 핏</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <button className="w-full bg-[#27548A] text-white py-4 font-medium hover:bg-[#1e4068] transition-colors">
                    <ShoppingBag className="w-5 h-5 mr-2 inline" />
                    주문하기
                  </button>

                  <div className="flex space-x-4">
                    <button className="flex-1 flex items-center justify-center py-3 border border-gray-300 hover:border-gray-400 transition-colors">
                      <Heart className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-700">찜</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center py-3 border border-gray-300 hover:border-gray-400 transition-colors">
                      <Share className="w-4 h-4 mr-2 text-gray-600" />
                      <span className="text-sm text-gray-700">공유</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
