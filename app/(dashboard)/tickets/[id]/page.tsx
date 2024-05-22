import Link from "next/link";
import Loading from "../loading";
import TicketForPage from "@/app/components/tickets/TicketForPage";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params: { id } } : { params: { id: string } }) => {
    const supabase = createServerComponentClient({ cookies });

    const { data } = await supabase.from("tickets").select().eq("id", id).single();

    return {
        title: `NB Tickets - ${data?.title || 'Ticket Not Found'}`
    }
}

const TicketDetails = async ({ params: { id } } : { params: { id: string } }) => {
    return (
        <section className="py-12">
            <article className="flex justify-between items-center mb-12">
                <h4 className="font-semibold text-indigo-500">Ticket Details</h4>
                <Link href={"/tickets"} className="btn btn-s btn-prim mt-6">Back to Tickets</Link>
            </article> 

            <Suspense fallback={<Loading />}>
                <TicketForPage id={id}  />
            </Suspense>
        </section>
    );
}
 
export default TicketDetails;