"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

let username = "john";
let isPro = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};
export const login = async (formData: FormData) => {
  const session = await getSession();
  const formUsername = formData.get("username") as string;
  const formPassword = formData.get("password") as string;

  // CHECK USER IN THE DB
  // const user  = await DiBackbone.getUser({username,password})

  if (formUsername !== username) {
    return { error: "Wrong Crenditials!" };
  }

  session.userId = "1";
  session.userName = formUsername;
  session.isPro = isPro;

  await session.save()
};
export const logout = async () => {};
