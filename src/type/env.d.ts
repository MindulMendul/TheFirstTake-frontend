declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KAKAO_CLIENT_ID: string;
      KAKAO_CLIENT_SECRET: string;
    }
  }
  // interface Window {
  //   kakao: any;
  // }
}
 
export {};