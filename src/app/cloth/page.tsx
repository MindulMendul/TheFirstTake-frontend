"use client"

import { postClothInfo } from "@/apis/API";
import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [data, setData] = useState([
    "질문지1", "질문지2"
  ]);

  const submit = async () => {
    const [response, error] = await postClothInfo(data);
    if(error){
      alert("error");
      return;
    }
    console.log(response);
    router.push('/llm');
  }

  return (
    <div className="flex flex-col">
      CI 페이지
      <br/>
      질문지
      {
        data.map((e, i)=>(
          <div key={i}>
            {e}
            <input />
          </div>
        ))
      }
      <ThemeButton text={"이동하기"} handleClick={submit}/>
    </div>
  );
}