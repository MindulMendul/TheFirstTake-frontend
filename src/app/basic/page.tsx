"use client"

import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      BI 페이지
      <br/>
      <ThemeButton text={"이동하기"} handleClick={()=>{router.push('/cloth')}}/>
    </div>
  );
}