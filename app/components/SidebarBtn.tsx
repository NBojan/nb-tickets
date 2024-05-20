"use client"

import { useGlobalContext } from "../context";
import { HiOutlineMenu } from "react-icons/hi";

const SidebarBtn = () => {
    const { toggleSidebar } = useGlobalContext();

    return (
        <button className="text-3xl text-gray-600 hover:scale-125 transition" onClick={toggleSidebar}>
            <HiOutlineMenu />
        </button>
    );
}
 
export default SidebarBtn;