"use client"

import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      결과 페이지
      <Image src={"/justyna.png"} alt={"tmp img"} width={300} height={300}/>
      <ThemeButton text={"이동하기"} handleClick={()=>{router.push('/')}}/>
    </div>
  );
}