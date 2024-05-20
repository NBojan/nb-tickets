import Link from "next/link";
import { TicketElement } from "./TicketList";

const Ticket = ({ ticket } : { ticket: TicketElement }) => {
    return (
      <Link href={`/tickets/${ticket.id}`} className="block bg-white p-4 pb-10 rounded shadow space-y-3 relative">
        <p className="font-semibold">{ticket.title}</p>
        <p className="text-gray-600 line-clamp-2 card-text-resp">{ticket.body}</p>
        <div className={`priority priority-${ticket.priority}`}>{ticket.priority} priority</div>
      </Link>
    );
}
 
export default Ticket;