import DeleteTicket from "./DeleteTicket";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { TicketElement } from "@/app/(dashboard)/tickets/page";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = 'force-dynamic';

const getTicket = async (id:string) => {
    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase.from("tickets").select().eq("id", id).single();
    if(error) return notFound();
    return data as TicketElement;
}


const TicketForPage = async ({ id } : { id:string }) => {
    const ticket = await getTicket(id);
    const supabase = createServerComponentClient({ cookies });
    const { data: { user } }  = await supabase.auth.getUser();

    return (
        <article>    
            <div className="block bg-white p-4 pb-10 rounded shadow relative">
                <div className="space-y-1 mb-4">
                    <p className="font-semibold">{ticket.title}</p>
                    <p className="text-sm text-gray-600">Created by {ticket.user_email}</p>
                </div>
                <p className="text-gray-600 card-text-resp">{ticket.body}</p>
                <div className={`priority priority-${ticket.priority}`}>{ticket.priority} priority</div>
            </div>


            {user?.email === ticket.user_email && (
                <div className="flex justify-end mt-8">
                    <DeleteTicket id={id} />
                </div>
            )}
        </article>
    );
}
 
export default TicketForPage;