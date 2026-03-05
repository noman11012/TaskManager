import React from "react";
import { Calendar } from "lucide-react";

const TicketCard = ({ ticket }) => {
  const priorityColor =
    ticket.priority === "HIGH"
      ? "text-red-500"
      : ticket.priority === "MEDIUM"
      ? "text-yellow-500"
      : "text-green-500";

  return (
    <div className="bg-base-100 shadow-md rounded-xl p-5">
      
      {/* Title + Status */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg text-gray-800">
          {ticket.title}
        </h3>

        <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          {ticket.status}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2">
        {ticket.description}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4 text-sm">
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400">{ticket.id}</span>
          <span className={`font-semibold ${priorityColor}`}>
            {ticket.priority} PRIORITY
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-400">
          <span>{ticket.user}</span>

          <div className="flex items-center gap-1">
            <Calendar size={16} />
            {ticket.date}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketCard;