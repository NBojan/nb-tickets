import Link from "next/link";
import { SiDarkreader } from "react-icons/si";

const AuthNavbar = () => {
    return (
        <nav className="flex justify-between items-center h-[5rem] shadow-b">
            <div className="flex items-center space-x-2 md:space-x-4">
                <div className="text-4xl text-gray-600"><SiDarkreader /></div>
                <div className="text-indigo-500 text-navbar-resp font-semibold line-clamp-1">
                    <span>NB </span>
                    <span>Tickets</span>
                </div>
                <Link href={"/login"} className="text-gray-600 text-navbar-resp hover:text-gray-800 transition-colors">Login</Link>
                <Link href={"/register"} className="text-gray-600 text-navbar-resp hover:text-gray-800 transition-colors">Register</Link>
            </div>
        </nav>
    );
}
 
export default AuthNavbar;