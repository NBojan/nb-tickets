"use client"
import { useState } from "react";
import { useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <AppContext.Provider value={{sidebar, toggleSidebar}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}