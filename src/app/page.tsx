'use client';

import { getSessionStart } from '@/apis/clothAPI';
import ThemeButton from '@/components/ThemeButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      웹페이지 시작
      <ThemeButton
        text={'이동하기'}
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
  );
}
