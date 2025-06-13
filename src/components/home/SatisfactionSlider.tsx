'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const recommendations = [
  {
    id: 1,
    user: '김지민',
    style: '캐주얼 룩',
    image: '/cloth1.jpg',
    description: '기본에 충실하면서도 세련된 데일리 룩',
  },
  {
    id: 2,
    user: '이서연',
    style: '오피스 룩',
    image: '/cloth2.jpg',
    description: '깔끔하고 전문적인 이미지의 비즈니스 룩',
  },
  {
    id: 3,
    user: '박준호',
    style: '미니멀 룩',
    image: '/cloth3.jpg',
    description: '심플하면서도 포인트가 있는 미니멀 스타일',
  },
  {
    id: 4,
    user: '최유진',
    style: '스트릿 룩',
    image: '/cloth1.jpg',
    description: '트렌디한 스트릿 패션의 완성',
  },
  {
    id: 5,
    user: '정민수',
    style: '클래식 룩',
    image: '/cloth2.jpg',
    description: '타임리스한 클래식 스타일링',
  },
  {
    id: 6,
    user: '박민규',
    style: '노예복',
    image: '/cloth3.jpg',
    description: '제발 이곳에서 나가고 싶어요, 살려주세요!',
  },
];

export default function SatisfactionSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;
    if (!slider || !container) return;

    let animationFrame: number;
    let position = 0;
    const speed = 0.5; // 스크롤 속도
    const cardWidth = 384; // w-96 = 24rem = 384px
    const gap = 24; // space-x-6 = 1.5rem = 24px
    const totalWidth = (cardWidth + gap) * recommendations.length;

    const animate = () => {
      position -= speed;
      
      // 전체 너비의 절반을 넘어가면 처음으로 리셋
      if (position <= -totalWidth) {
        position = 0;
      }
      
      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="my-16 py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            지금까지 <span className="text-ccblue">5,128명</span>이 만족한 추천 결과
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            AI 큐레이션으로 완성된 다양한 스타일링을 확인해보세요
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-6"
            style={{ width: 'fit-content' }}
          >
            {/* 원본 데이터 3번 반복 */}
            {[...recommendations, ...recommendations, ...recommendations].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-192 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-160">
                  <Image
                    src={item.image}
                    alt={item.style}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-ccblue px-2 py-1 rounded-full">
                      {item.style}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-ccblue flex items-center justify-center text-white font-medium">
                      {item.user[0]}
                    </div>
                    <span className="ml-2 font-medium text-gray-900 dark:text-white">
                      {item.user}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
