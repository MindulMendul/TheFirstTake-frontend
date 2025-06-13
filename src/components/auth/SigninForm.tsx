'use client';

import { encrypt } from '@/utils/crypt';
import { useState } from 'react';

export default function SigninForm() {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  const handleSubmit = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_TFT_BACKEND_URL, {
      method: 'POST',
      body: JSON.stringify({
        id: ID,
        password: encrypt(PW),
      }),
    });

    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="ID" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          아이디
        </label>
        <input
          type="email"
          id="ID"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ccblue focus:border-transparent transition-all duration-200"
          placeholder="thefirst@take.com"
          required
          value={ID}
          onChange={(e) => setID(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="pw" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          비밀번호
        </label>
        <input
          type="password"
          id="pw"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ccblue focus:border-transparent transition-all duration-200"
          placeholder="••••••••"
          required
          value={PW}
          onChange={(e) => setPW(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-ccblue to-ccnavy text-white font-medium shadow-lg hover:shadow-xlfocus:outline-none focus:ring-2 focus:ring-offset-2 transform transition-all duration-200 hover:-translate-y-0.5"
      >
        로그인
      </button>
    </form>
  );
}
