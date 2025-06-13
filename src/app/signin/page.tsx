import SigninForm from '@/components/auth/SigninForm';
import SigninSNSForm from '@/components/auth/SigninSNSForm';
import Link from 'next/link';

export default function SigninPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="w-full max-w-md p-8 space-y-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-ccblue to-ccnavy bg-clip-text text-transparent">
            Sign In
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">로그인하고 서비스를 이용해보세요</p>
        </div>

        <div className="space-y-6">
          <SigninForm />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400">또는</span>
            </div>
          </div>

          <SigninSNSForm />
        </div>

        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          계정이 없으신가요?{' '}
          <Link href="/signup" className="font-medium text-ccnavy hover:text-ccblue dark:text-indigo-400">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
