'use client';

import Image from 'next/image';

const features = [
  {
    title: '패알못을 위한 기본아이템 확인',
    description:
      '패션 초보자를 위한 필수 아이템 체크리스트를 제공합니다. 기본에 충실하면서도 스타일리시한 룩을 완성할 수 있습니다.',
    image: '/cloth1.jpg',
    icon: '👔',
  },
  {
    title: '개인 핏 적합성 분석',
    description:
      '체형과 스타일을 분석하여 최적의 핏을 찾아드립니다. 개인별 맞춤형 추천으로 실패 없는 쇼핑을 경험하세요.',
    image: '/cloth2.jpg',
    icon: '📏',
  },
  {
    title: '옷장 속 옷 조합 분석',
    description:
      '보유한 아이템들의 조합 가능성을 분석하여 새로운 스타일링을 제안합니다. 기존 옷장을 더욱 효율적으로 활용하세요.',
    image: '/cloth3.jpg',
    icon: '🎨',
  },
];

export default function ServiceFeatures() {
  return (
    <div className="my-16 py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            더 나은 스타일링을 위한 특별한 기능들
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The First Take는 단순한 옷 추천을 넘어, 당신의 스타일을 완성하는 다양한 기능을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-128">
                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{feature.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
