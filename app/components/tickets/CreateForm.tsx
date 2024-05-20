"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const CreateForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);
    const [ticket, setTicket] = useState({ title: "", body: "", priority: "low" });

    const handleChange = (e:any) => {
        setTicket({...ticket, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const supabase = createClientComponentClient();
        const { data:session } = await supabase.auth.getUser();
        
        if(!session.user?.email) {
            setError("Couldn't find the logged user email.")
            setLoading(false);
            return;
        }

        const { error } = await supabase.from("tickets").insert({
            ...ticket,
            user_email: session.user.email
        })
        .select()
        .single();

        if(error) setError(error.message);
        else {
            router.push("/tickets");
            setTicket({ title: "", body: "", priority: "low" });
        }
        setLoading(false);
    }

    return (
        <form className="w-[90%] max-w-[500px] mx-auto bg-indigo-200 py-4 px-6 rounded shadow space-y-4" onSubmit={handleSubmit}>
            <label className="create-label">
                <p>Title:</p>
                <input type="text" name="title" placeholder="Ticket title..." value={ticket.title} onChange={handleChange} required />
            </label>
            <label className="create-label">
                <p>Body:</p>
                <textarea name="body" value={ticket.body} onChange={handleChange} required />
            </label>
            <label className="create-label">
                <p>Priority:</p>
                <select name="priority" id="priority" value={ticket.priority} onChange={handleChange} required>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>

            {error && <p className="text-center text-red-600">{error}</p>}

            <div className="flex justify-center">
                <button type="submit" className="btn btn-m btn-prim">{loading ? "Adding..." : "Add Ticket"}</button>
            </div>
        </form>
    );
}
 
export default CreateForm;