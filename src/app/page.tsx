import Link from "next/link";

export default async function Home() {

  return (
    <div className="">
      웹페이지 시작
      <br/>
      <Link href="/signin" className="h3">로그인 화면 이동</Link>
    </div>
  );
}