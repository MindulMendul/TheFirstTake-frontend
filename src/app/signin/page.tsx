import SigninForm from '@/components/auth/SigninForm';
import SignInKakaoButton from '@/components/auth/SignInKakaoButton';
import SignOutButton from '@/components/auth/SignOutButton';

export default function Home() {
  return (
    <div className="">
      <h3 />
      웹페이지 로그인
      <h3 />
      <div>
        <SigninForm />
      </div>
      <div>
        <h5>SNS 로그인</h5>
        <div>
          <SignInKakaoButton />
        </div>
      </div>
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}
