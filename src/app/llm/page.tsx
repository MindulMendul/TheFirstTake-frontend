"use client"

import { getLLMQuestion } from "@/apis/API";
import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [questionList, setQuestionList]=useState(new Map());
  const [resultList, setResultList]=useState(new Map())
  // 질문지 맵 {
  //   question1:"asdf",
  //   question2:"qwer",
  // }
  // 답변 맵 {
  //   question1:"",
  //   question2:""
  // }

  useEffect(()=>{
    (async ()=>{
      const [questionData, questionError] = await getLLMQuestion();
      if(questionError) {
        alert("error");
        return;
      }
      
      const resultList = new Map();
      questionData.keys().forEach((e:any)=>{
        resultList.set(e, questionData[e]);
      })

      setQuestionList(resultList);
    })();
  },[]);
  
  return (
    <div className="flex flex-col">
      LLM 페이지
      <br/>
      {/* {questionList.map((e:string, i:number)=>(
        <div key={i} onChange={(e)=>{
          setQuestionList({
            [q.valueName]:(e.target.value)
            }
          )
        }}>
          {q.question}
          <input/>
        </div>
      ))} */}
      
      <ThemeButton text={"이동하기"} handleClick={()=>{router.push('/result')}}/>
    </div>
  );
}