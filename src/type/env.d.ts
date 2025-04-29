declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_KAKAO_ID: string;
      AUTH_KAKAO_SECRET: string;
      BACKEND_URL: string;
      BACKEND_AUTH_KAKAO_URL: string;
    }
  }
  // interface Window {
  //   kakao: any;
  // }
}
 
export {};