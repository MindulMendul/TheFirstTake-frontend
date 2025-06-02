'use client';

import { getSessionStart } from '@/apis/clothAPI';
import ThemeButton from '@/components/ThemeButton';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const clothData = [
  {imgSrc:'/cloth1.jpg', title:'맞춤형 옷추천', description:'LLM을 통한 맞춤형 옷 추천'},
  {imgSrc:'/cloth2.jpg', title:'옷 핏 체크', description:'핏이 사는지 확인해주는 기능'},
  {imgSrc:'/cloth3.jpg', title:'패알못 체크리스트', description:'잘 입고다닐 옷이 있는지 확인'},
];

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col w-full">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl font-bold text-ccblue">The First Take</h1>
        </div>
      </div>

      {/* Start Button */}
      <div className="flex flex-col items-center justify-center p-48">
        <h2 className="text-3xl font-bold pb-6 text-ccnavy">AI man's style curator</h2>
        <h2 className="text-6xl font-bold pb-24 text-ccnavy">옷을 단 하나만 추천해주는 플랫폼</h2>
        <p className="text-2xl pb-12 text-center text-ccnavy">
          옷을을 못 고르겠으면 우리 AI 서비스를 이용하시면 되겠습니다.
          <br/>
          뭐, 그렇게 어려운 거 아니고요. 그냥 딸깍 하면 나옵니다... 예..
          <br/>
          한 번 써보시고 결론지어도 늦지 않으실 겁니다.
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
            router.push('/user-info');
          }}
        />
      </div>

      {/* Image Cards Section */}
      <div className="w-full max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clothData.map((data, ind) => (
            <div key={ind}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={data.imgSrc}
                alt={data.title}
                fill
                className="object-cover"
              />
              
            </div>
            <div className="text-center text-ccnavy text-3xl font-bold pt-4">{data.title}</div>
            <div className="text-center text-ccnavy text-xl font-bold pt-4">{data.description}</div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
