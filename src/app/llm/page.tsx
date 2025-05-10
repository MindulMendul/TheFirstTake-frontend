"use client"

import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [data, setData]=useState({});

  const questionList = [
    {question:"질문지1"},
    {question:"질문지2"},
    {question:"질문지3"},
  ]
  
  return (
    <div className="flex flex-col">
      LLM 페이지
      <br/>
      {questionList.map((e,i)=>(
        <div key={i}>
          {e.question}
          <input/>
        </div>
      ))}
      
      <ThemeButton text={"이동하기"} handleClick={()=>{router.push('/result')}}/>
    </div>
  );
}