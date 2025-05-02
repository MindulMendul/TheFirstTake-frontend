import { setToken } from "@/actions/cookies";
import { asdf } from "../../../../../actions/actions";

export default async function CallbackPage({searchParams}: any) {
  

  // Server Action
  async function create() {
    'use server'
    const data=await asdf((await searchParams).code);
    await setToken(data);
  }
  await create();

  return (
    <div className="">
      테스트
    </div>
  );
}