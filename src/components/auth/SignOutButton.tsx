import { redirect } from "next/navigation";

 export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server"
        const res=await fetch(`${process.env.BACKEND_URL}/api/auth/logout/kakao`, {
          method:"POST",
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({})
        });
        console.log(res);
        console.log("응애");
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}