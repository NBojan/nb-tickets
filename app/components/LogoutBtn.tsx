"use client"

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const LogoutBtn = () => {
    const router = useRouter();

    const logout = async () => {
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signOut();

        if(!error) return router.push("/login");
        else console.log(error)
    }
    return (
        <button className="btn btn-s btn-prim" onClick={logout}>
            Log out
        </button>
    );
}
 
export default LogoutBtn;