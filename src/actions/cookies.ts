"use server";

import { cookies } from "next/headers";

export const setToken = async (data:any) => {
  const cookieStorage = await cookies();
  console.log(cookieStorage);
  cookieStorage.set("access_token", data?.access_token, {maxAge:3600});
  cookieStorage.set("refresh_token", data?.refresh_token, {maxAge:86400});
};


