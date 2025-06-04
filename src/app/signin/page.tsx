import SigninForm from '@/components/auth/SigninForm';
import SigninSNSForm from '@/components/auth/SigninSNSForm';

export default function Home() {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <div className="w-1/4">
        <h3 className="text-3xl font-bold my-12">웹페이지 로그인</h3>
        <div className="my-5">
          <SigninForm />
        </div>
        <span className="bg-white px-3 relative text-sm text-gray-500 ">또는</span>
        <div className="my-5">
          <SigninSNSForm />
        </div>
      </div>
    </div>
  );
}
