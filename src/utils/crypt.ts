import CryptoJS from "crypto-js";

export const encrypt = (str:string)=>{
  return CryptoJS.SHA256(str).toString();
}