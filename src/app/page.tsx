import Link from "next/link";

export default async function Home() {

  return (
    <div className="">
      웹페이지 시작
      <br/>
      <Link href="/signin">
        <button className="text-2xl btn btn-blue">
          로그인 화면 이동
        </button>
      </Link>
      <br/>
      <Link href="/test">
        <button className="text-2xl btn btn-blue">
          테스트 화면 이동
        </button>
      </Link>
    </div>
  );
}