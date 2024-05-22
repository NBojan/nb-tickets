"use client"

import SideNav from "./SideNav";
import LogoutBtn from "../LogoutBtn";
import { Session } from "@supabase/supabase-js";
import { useGlobalContext } from "@/app/context";

const Sidebar = ({ session }: { session: Session }) => {
    const { sidebar } = useGlobalContext();

    return (
        <aside className={`sm:opacity-0 sm:-translate-x-full fixed p-4 top-0 left-0 w-full h-full bg-blue-100 transition  z-50 ${sidebar ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
            <SideNav />

            <main className="flex flex-col justify-center h-full">
                <div className="space-y-2">
                    <p className="text-base">Hello, {session.user.email}</p>
                    <LogoutBtn />
                </div>
            </main>
        </aside>
    );
}
 
export default Sidebar;