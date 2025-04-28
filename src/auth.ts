import NextAuth from "next-auth"
import kakao from "next-auth/providers/kakao";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [kakao],
  pages: {
    signIn: "/signin",
  },
})
 