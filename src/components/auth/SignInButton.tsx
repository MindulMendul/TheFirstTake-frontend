import { redirect } from "next/navigation";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        const uri=`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_ID}&redirect_uri=${"http://172.16.101.234:3000/api/auth/callback/kakao"}&response_type=code`;
        redirect(uri);
      }}
    >
      <button type="submit">Sign In</button>
    </form>
  )
}