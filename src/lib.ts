import { SessionOptions } from "iron-session";

export interface SessionData {
  userId: string;
  userName?: string;
  img?: string;
  isPro: boolean;
}


export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY!,
    cookieName: "Gocrazy-session",

    cookieOptions: {
        httpOnly: true,
      secure: process.env.NODE_ENV === 'production'  
    }
}