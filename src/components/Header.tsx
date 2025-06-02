'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <header className="w-full bg-white shadow-md">
        <div className="flex mx-48 justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-ccnavy">
              <span className="text-ccblue">The</span> First Take
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <Link href="/about" className="text-ccnavy hover:text-ccblue transition-colors">
              About
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/signin')}
                className="px-4 py-2 bg-ccblue text-white rounded-md hover:bg-ccnavy transition-colors"
              >
                Sign In
              </button>
            </div>
          </nav>
      </div>
    </header>
  );
} 