"use client"

import { postBasicInfo } from "@/apis/API";
import Dropdown from "@/components/Dropdown";
import DropdownOption from "@/components/DropdownOption";
import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();

  const [tall, setTall] = useState(0);
  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState(0);
  const [age, setAge] = useState(0);

  const submit = async () => {
    const basicInfo = {
      tall: tall,
      weight: weight,
      gender: gender,
      age: age
    }

    const [response, error] = await postBasicInfo(basicInfo);
    if(error){
      console.error(error);
      alert("basic error");
      return;
    }
    
    console.log(response);
    router.push('/cloth');
  }

  return (
    <div className="flex flex-col">
      BI 페이지
      
      <form>
        ㅎㅇ
      </form>
      <div>
      <Dropdown title={"title1"}>
        <DropdownOption>a1</DropdownOption>
        <DropdownOption>a2</DropdownOption>
        <DropdownOption>a3</DropdownOption>
        <DropdownOption>a4</DropdownOption>
      </Dropdown>
      
      <Dropdown title={"title2"}>
        <DropdownOption>a1</DropdownOption>
        <DropdownOption>a2</DropdownOption>
        <DropdownOption>a3</DropdownOption>
        <DropdownOption>a4</DropdownOption>
      </Dropdown>
      </div>
      <div>
      <Dropdown title={"title3"}>
        <DropdownOption>a1</DropdownOption>
        <DropdownOption>a2</DropdownOption>
        <DropdownOption>a3</DropdownOption>
        <DropdownOption>a4</DropdownOption>
      </Dropdown>

      <Dropdown title={"title4"}>
        <DropdownOption>a1</DropdownOption>
        <DropdownOption>a2</DropdownOption>
        <DropdownOption>a3</DropdownOption>
        <DropdownOption>a4</DropdownOption>
      </Dropdown>
      </div>
      <ThemeButton text={"이동하기"} handleClick={submit}/>
    </div>
  );
}