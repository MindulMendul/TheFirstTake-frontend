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
      <div className="input-group">
        <label htmlFor="ID" className="input-label">
          아이디
        </label>
        <input
          type="email"
          id="ID"
          className="text-input text-gray-800"
          placeholder="your_ID"
          required
          value={ID}
          onChange={(e) => setID(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="pw" className="input-label">
          비밀번호
        </label>
        <input
          type="password"
          id="pw"
          className="text-input text-gray-800"
          placeholder="••••••••"
          required
          value={PW}
          onChange={(e) => setPW(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full mb-4 flex justify-center items-center transition-all hover:translate-y-[-1px]"
      >
        로그인
      </button>
    </form>
  );
}
