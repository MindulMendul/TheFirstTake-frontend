"use client"

import { encrypt } from "@/utils/crypt";
import { useState } from "react";

export default function SigninForm() {
  const [ID, setID] = useState('');
  const [PW, setPW] = useState('');

  const submit = async () => {
    const res= await fetch(process.env.TEAM30_BACKEND_URL, {
      method:"POST",
      body:JSON.stringify({
        id:ID,
        password:encrypt(PW)
      })
    })

    console.log(res);
  }

  return (
    <div>
    <div className="">
      <input type="text" value={ID} onChange={(e)=>{setID(e.target.value);}}/>
      <input type="password" value={PW} onChange={(e)=>{setPW(e.target.value);}}/>
    </div>
    <button type="submit" onClick={submit}>크레덴셜 로그인</button>
    </div>
  );
}