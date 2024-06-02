import { sessionOptions, SessionData } from "@/lib"
import { getIronSession } from "iron-session"

export const getSession = async () => { 
    const session = await getIronSession{SessionData}
}
export const login = async ()=>{}
export const logout = async ()=>{}