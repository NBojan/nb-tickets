import Link from "next/link";
// import SidebarBtn from "./SidebarBtn";
import { LogoutBtn, SidebarBtn } from ".";
import { SiDarkreader } from "react-icons/si";
import { Session } from "@supabase/supabase-js";

const Navbar = ({ session }: { session: Session }) => {
    return (
        <nav className="flex justify-between items-center h-[5rem] shadow-b">
            <div className="flex items-center space-x-2 md:space-x-4">
                <div className="text-4xl text-gray-600"><SiDarkreader /></div>
                <Link href={"/"} className="hidden sm:inline-block text-indigo-500 text-navbar-resp font-semibold">
                    <span>NB </span>
                    <span>Tickets</span>
                </Link>
                <Link href={"/"} className="text-gray-600 text-navbar-resp hover:text-gray-800 transition-colors">Dashboard</Link>
                <Link href={"/tickets"} className="text-gray-600 text-navbar-resp hover:text-gray-800 transition-colors">Tickets</Link>
            </div>

            <div className="hidden items-center space-x-2 sm:flex">
                <p className="text-sm sm:text-base">Hello, {session.user.email}</p>
                <div className="hidden sm:block"><LogoutBtn /></div>
            </div>

            <div className="flex items-center sm:hidden">
                <SidebarBtn />
            </div>
        </nav>
    );
}
 
export default Navbar;