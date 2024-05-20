"use client"

import { SideNav, LogoutBtn } from "..";
import { Session } from "@supabase/supabase-js";
import { useGlobalContext } from "@/app/context";

const Sidebar = ({ session }: { session: Session }) => {
    const { sidebar } = useGlobalContext();

    return (
        <aside className={`sm:opacity-0 sm:-translate-x-full fixed p-4 top-0 left-0 w-full h-full bg-blue-100 transition ${sidebar ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
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