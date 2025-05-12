'use client';

import { postSaveInfo } from '@/apis/clothAPI';
import ThemeButton from '@/components/ThemeButton';
import { useRouter } from 'next/navigation';

export default function SubmitButton({ nextUrl }: { nextUrl: string }) {
  const router = useRouter();

  const submit = async () => {
    const [response, error] = await postSaveInfo({});
    if (error) {
      console.error(error);
      alert('save info error');
      return;
    }

    console.log(response.data);
    router.push(nextUrl);
  };

  return <ThemeButton text={'이동하기'} handleClick={submit} />;
}
