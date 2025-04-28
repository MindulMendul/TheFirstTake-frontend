import SignInButton from "@/components/auth/SignInButton";
import SignOutButton from "@/components/auth/SignOutButton";

export default function Home() {
  return (
    <div className="">
      웹페이지 로그인
      <SignInButton />
      <SignOutButton />
    </div>
  );
}