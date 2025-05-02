declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BACKEND_URL: string;
      AUTH_KAKAO_ID: string;
      AUTH_KAKAO_SECRET: string;
      AUTH_KAKAO_REDIRECT_URL: string;
      AUTH_KAKAO_BACKEND_URL: string;
    }
  }
  // interface Window {
  //   kakao: any;
  // }
}
 
export {};