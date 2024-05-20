import Link from "next/link";
import { HiX } from "react-icons/hi";
import { SiDarkreader } from "react-icons/si";
import { useGlobalContext } from "@/app/context";

const SideNav = () => {
    const { toggleSidebar } = useGlobalContext();

    return (
        <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <div className="text-4xl text-gray-600"><SiDarkreader /></div>
                <Link href={"/"} className="text-indigo-500 text-navbar-resp font-semibold line-clamp-1" onClick={toggleSidebar}>
                    <span>NB </span>
                    <span>Tickets</span>
                </Link>
            </div>

            <button className="btn btn-m btn-prim" onClick={toggleSidebar}>
                <HiX />
            </button>
        </nav>
    );
}
 
export default SideNav;