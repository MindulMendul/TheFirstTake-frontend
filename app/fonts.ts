import { Plus_Jakarta_Sans, Noto_Sans_KR } from 'next/font/google';

// 영문 폰트 설정
export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'], // 라틴 문자만 포함
  weight: ['400', '500', '700'], // 사용할 폰트 굵기
  display: 'swap',
  variable: '--font-plus-jakarta-sans', // CSS 변수 이름 지정
});

// 한글 폰트 설정
export const noto_sans_kr = Noto_Sans_KR({
  subsets: ['latin'], // Noto Sans KR은 자체적으로 한글을 포함하므로 'korean' subset은 필요 없습니다.
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-noto-sans-kr', // CSS 변수 이름 지정
});
