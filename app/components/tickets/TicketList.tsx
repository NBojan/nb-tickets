import { Ticket } from "..";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export interface TicketElement {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
}

const getTickets = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { error, data } = await supabase.from("tickets").select();
  if(error) throw new Error(error.message);

  return data as TicketElement[];
}

const TicketList = async () => {
  const tickets = await getTickets();

    return (  
        <article className="space-y-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => <Ticket ticket={ticket} key={ticket.id} />)
          ) : (
            <p className="text-gray-600">
              There are currently no open tickets.
            </p>
          )}
        </article>
    );
}
 
export default TicketList;