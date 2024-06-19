"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "Gocrazy";
let isPro = true;

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};
export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
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
  session.isLoggedIn = true;

  await session.save();
  redirect("/");
};
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export const changePremium = async () => {
  const session = await getSession();

  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  // refreshes the page immedietly
  revalidatePath("/profile");
};


export const changeUsername = async (formData:FormData) => {
  const session = await getSession();

  const newUsername = formData.get("username") as string

  isPro = !session.isPro;
  session.isPro = isPro;
  await session.save();
  // refreshes the page immedietly
  revalidatePath("/profile");
};
