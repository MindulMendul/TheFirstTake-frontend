import { signIn } from "@/auth"
 
export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("kakao", {redirectTo:'/'})
      }}
    >
      <button type="submit">Signin with Kakao</button>
    </form>
  )
} 