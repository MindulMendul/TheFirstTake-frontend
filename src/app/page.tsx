'use client';

import ThemeButton from '@/components/ThemeButton';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      웹페이지 시작
      <br />
      <ThemeButton
        text={'이동하기'}
        handleClick={() => {
          router.push('/basic');
        }}
      />
    </div>
  );
}
