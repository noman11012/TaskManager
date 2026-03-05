import React from "react";
import { Calendar } from "lucide-react";

const TicketCard = ({ ticket ,TicketCardHandle}) => {

  function HandleTicket(){
    TicketCardHandle(ticket);
  }

  const priorityColor =
    ticket.priority === "HIGH"
      ? "text-red-500"
      : ticket.priority === "MEDIUM"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div
      onClick={HandleTicket}
      className="bg-base-100 shadow-md rounded-xl p-5"
    >

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">
          {ticket.title}
        </h3>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {ticket.status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mt-2">
        {ticket.description}
      </p>

      <div className="flex justify-between mt-4 text-sm">
        <div className="flex gap-2">
          <span>{ticket.id}</span>
          <span className={priorityColor}>
            {ticket.priority}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>{ticket.customer}</span>
          <Calendar size={16}/>
          {ticket.createdAt}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;