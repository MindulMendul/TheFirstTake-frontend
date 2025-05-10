"use client"

import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      CI 페이지
      <br/>
      질문지
      <ThemeButton text={"이동하기"} handleClick={()=>{router.push('/llm')}}/>
    </div>
  );
}