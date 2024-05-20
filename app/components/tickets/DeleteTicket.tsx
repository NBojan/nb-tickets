"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteTicket = ({ id } : { id:string }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);

        const supabase = createClientComponentClient();
        const { error } = await supabase.from("tickets").delete().eq("id", id);

        if(error) {
            console.log(error);
        }
        else {
            router.push("/tickets");
        }

        setLoading(false);
    }

    return (
        <button type="button" className="btn btn-s btn-red" onClick={handleDelete}>
            {loading ? "Deleting..." : "Delete Ticket"}
        </button>
    );
}
 
export default DeleteTicket;