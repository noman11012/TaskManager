import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import TaskStatus from "./Components/TaskStatus";
import TicketCard from "./Components/TicketCard";
import Data from "./assets/Data.json";
import ResolveTask from "./Components/ResolveTask";

function App() {
  const tickets = Data;

  const [ticketID, setTicketID] = useState([]);
  const [taskID, setTaskID] = useState([]);

  function TicketCardHandle(ticket) {
    const updatedTicketID = [...ticketID, ticket];
    setTicketID(updatedTicketID);
    toast.success(`Added to TaskStatus: ${ticket.title}`); // Toast
  }

  function TaskStatusHandle(task) {
    const updatedTaskID = [...taskID, task];
    setTaskID(updatedTaskID);

    const remainingTickets = ticketID.filter(
      (ticket) => ticket.id !== task.id
    );
    setTicketID(remainingTickets);

    toast.success(`Moved to Resolve Task: ${task.title}`);
  }

  function ResolveTaskHandle(task) {
    // Customer Tickets থেকে remove হবে
    const remainingTickets = ticketID.filter((t) => t.id !== task.id);
    setTicketID(remainingTickets);

    toast.success(`Task Completed: ${task.title}`);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-base-200">
        <Navbar />
        <Dashboard task={ticketID.length} resolve={taskID.length} />
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  TicketCardHandle={TicketCardHandle}
                  ticket={ticket}
                />
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div>
              <h2 className="text-sm font-bold mb-1">Task Status</h2>
              {ticketID.map((selectedTicket) => (
                <TaskStatus
                  key={selectedTicket.id}
                  TaskStatusHandle={TaskStatusHandle}
                  selectedTicket={selectedTicket}
                />
              ))}
            </div>

            <div>
              <h2 className="text-sm font-bold mb-1">Resolve Task</h2>
              {taskID.map((selectedTicket) => (
                <ResolveTask
                  key={selectedTicket.id}
                  selectedTicket={selectedTicket}
                  ResolveTaskHandle={ResolveTaskHandle}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;