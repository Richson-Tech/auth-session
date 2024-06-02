import { sessionOptions, SessionData } from "@/lib"
import { getIronSession } from "iron-session"

export const getSession = async () => { 
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    return session;
}
export const login = async ()=>{}
export const logout = async ()=>{}