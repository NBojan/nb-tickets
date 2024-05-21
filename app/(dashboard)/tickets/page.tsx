import Link from "next/link";
import { Metadata } from "next";
import { TicketList } from "@/app/components";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export interface TicketElement {
  id: number;
  title: string;
  body: string;
  priority: string;
  user_email: string;
}

export const metadata: Metadata = {
    title: "NB Tickets - Tickets",
};

const getTickets = async () => {
  const supabase = createServerComponentClient({ cookies });
  const { error, data } = await supabase.from("tickets").select();
  if(error) throw new Error(error.message);

  return data as TicketElement[];
}

const Tickets = async () => {
  const tickets = await getTickets();

    return (
      <section className="py-12">
        <article className="mb-8 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-indigo-500 mb-2">Tickets</h4>
            <p className="text-gray-600">Currently open tickets:</p>
          </div>

          <Link href={"/tickets/create"} className="btn btn-s btn-prim">Add Ticket</Link>
        </article>

        <TicketList tickets={tickets} />
      </section>
    );
}
 
export default Tickets;