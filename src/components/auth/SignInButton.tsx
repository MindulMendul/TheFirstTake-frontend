export default function SignInButton() {
  return (
    <form
      action={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.AUTH_KAKAO_ID}&redirect_uri=${process.env.AUTH_KAKAO_REDIRECT_URL}&response_type=code`}
      method="GET"
    >
      <button type="submit">Sign In</button>
    </form>
  );
}
