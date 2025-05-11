'use client';

import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await fetch(`${process.env.TEAM30_BASE_URL}/api/auth/logout/kakao`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({}),
    });

    if (res.ok) {
      router.push('/');
    }
  };

  return <button onClick={handleLogout}>Sign Out</button>;
}
