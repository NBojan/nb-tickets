import { Ticket } from "..";
import { TicketElement } from "@/app/(dashboard)/tickets/page";

const TicketList = async ({ tickets } : { tickets:TicketElement[] }) => {
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