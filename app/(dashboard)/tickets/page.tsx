import Link from "next/link";
import Loading from "../loading";
import { Metadata } from "next";
import { Suspense } from "react";
import { TicketList } from "@/app/components";

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

const Tickets = async () => {
    return (
      <section className="py-12">
        <article className="mb-8 flex justify-between items-center">
          <div>
            <h4 className="font-semibold text-indigo-500 mb-2">Tickets</h4>
            <p className="text-gray-600">Currently open tickets:</p>
          </div>

          <Link href={"/tickets/create"} className="btn btn-s btn-prim">Add Ticket</Link>
        </article>

        <Suspense fallback={ <Loading /> }>
          <TicketList />
        </Suspense>
      </section>
    );
}
 
export default Tickets;