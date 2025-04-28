import { auth } from "@/auth";
import Link from "next/link";

export default async function Home() {

  const session = await auth();
  return (
    <div className="">
      웹페이지 시작
      <br/>
      {session?.user?.name}
      <div>{session?.user?.email}</div>
      <div>{session?.user?.image}</div>
      <div>{session?.user?.id}</div>
      <br/>
      <Link href="/signin" className="h3">로그인 화면 이동</Link>
    </div>
  );
}