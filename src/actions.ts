import { sessionOptions, SessionData } from "@/lib"
import { getIronSession } from "iron-session"

export const getSession = async () => { 
    "use server"
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);
    return session;
}
export const login = async () => {
    "use server"
}
export const logout = async ()=>{}