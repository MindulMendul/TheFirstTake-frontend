"use client"

import Dropdown from "@/components/Dropdown";
import DropdownOption from "@/components/DropdownOption";
import ThemeButton from "@/components/ThemeButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
      <ThemeButton text={"이동하기"} handleClick={()=>{router.push('/cloth')}}/>
    </div>
  );
}