'use client';

import { getSessionStart } from '@/apis/clothAPI';
import ThemeButton from '@/components/ThemeButton';
import Image from 'next/image';
import SatisfactionSlider from '@/components/home/SatisfactionSlider';
import AICurationSystem from '@/components/home/AICurationSystem';
import FAQ from '@/components/home/FAQ';
import ServiceFeatures from '@/components/home/ServiceFeatures';

const clothData = [
  { imgSrc: '/cloth1.jpg', title: '맞춤형 옷추천', description: 'LLM을 통한 맞춤형 옷 추천' },
  { imgSrc: '/cloth2.jpg', title: '옷 핏 체크', description: '핏이 사는지 확인해주는 기능' },
  { imgSrc: '/cloth3.jpg', title: '패알못 체크리스트', description: '잘 입고다닐 옷이 있는지 확인' },
];

export default function About() {
  return (
    <main>
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[600px]">
        <Image src="/background.jpg" alt="Background" fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-ccnavy mb-6">The First Take</h1>
          <h3 className="text-3xl text-ccblue">
            <span className="font-bold text-ccnavy">당신의 스타일</span>, 아직도 감으로 고르시나요?
          </h3>
          <h3 className="text-3xl text-ccblue">AI가 지금 당신의 옷장을 분석하고, 딱 맞는 스타일을 추천해드립니다.</h3>
        </div>
      </div>

      {/* Start Button */}
      <div className="flex flex-col items-center justify-center p-48">
        <h2 className="text-3xl font-bold pb-6 text-ccnavy">AI man's style curator</h2>
        <h2 className="text-6xl font-bold pb-24 text-ccnavy">옷을 단 하나만 추천해주는 플랫폼</h2>
        <p className="text-2xl pb-12 text-center text-ccnavy">
          옷을을 못 고르겠으면 우리 AI 서비스를 이용하시면 되겠습니다.
          <br />
          뭐, 그렇게 어려운 거 아니고요. 그냥 딸깍 하면 나옵니다... 예..
          <br />한 번 써보시고 결론지어도 늦지 않으실 겁니다.
        </p>
        <ThemeButton
          text={'시작하기'}
          handleClick={async () => {
            const [data, error] = await getSessionStart();
            if (error) {
              console.error(error);
              alert('starting session error');
              return;
            }
            console.log(data.data);
            // router.push('/user-info');
          }}
        />
      </div>

      <SatisfactionSlider />
      <AICurationSystem />
      <ServiceFeatures />
      <FAQ />
    </main>
  );
}
