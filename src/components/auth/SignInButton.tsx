import { redirect } from "next/navigation";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        const uri=`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_ID}&redirect_uri=${process.env.BACKEND_AUTH_KAKAO_URL}&response_type=code`;
        redirect(uri);
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  )
}