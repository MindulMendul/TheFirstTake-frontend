"use server"

export async function asdf(code:string){
  const res=await fetch(process.env.BACKEND_AUTH_KAKAO_URL, {
    method:"POST",
    body:JSON.stringify({code}),
    headers:{"Content-Type":"application/json", credentials: 'include'}
  });
  const data=(await res.json()).data;

  return data;
};