import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import TaskStatus from "./Components/TaskStatus";
import TicketCard from "./Components/TicketCard";
import Data from "./assets/Data.json";
import ResolveTask from "./Components/ResolveTask";
import Footer from "./Components/Footer";

function App() {
  const [tickets, setTickets] = useState(Data);  
  const [taskID, setTaskID] = useState([]);      
  const [resolveID, setResolveID] = useState([]); 

  // Ticket Card → Task Status
  function TicketCardHandle(ticket) {
    setTaskID(prev => [...prev, ticket]);
    toast.success(`Added to Task Status: ${ticket.title}`);
  }

  // Task Status Complete → Resolved Task
  function TaskStatusHandle(task) {
    setTaskID(prev => prev.filter(t => t.id !== task.id));
    setResolveID(prev => [...prev, task]);
    toast.success(`Moved to Resolved Task: ${task.title}`);
  }


  function ResolveTaskHandle(task) {
    setTickets(prev => prev.filter(t => t.id !== task.id));    
    toast.success(`Removed from Customer Tickets: ${task.title}`);
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-base-200">
        <Navbar />
        <Dashboard task={taskID.length} resolve={resolveID.length} />
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Customer Tickets */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tickets.map(ticket => (
                <TicketCard
                  key={ticket.id}
                  TicketCardHandle={TicketCardHandle}
                  ticket={ticket}
                />
              ))}
            </div>
          </div>

          {/* Task Status & Resolved */}
          <div>
            <h2 className="text-sm font-bold mb-1">Task Status</h2>
            {taskID.map(task => (
              <TaskStatus
                key={task.id}
                TaskStatusHandle={TaskStatusHandle}
                selectedTicket={task}
              />
            ))}

            <h2 className="text-sm font-bold mb-1 mt-4">Resolved Task</h2>
            {resolveID.map(task => (
              <ResolveTask
                key={task.id}
                selectedTicket={task}
                ResolveTaskHandle={ResolveTaskHandle}
              />
            ))}
          </div>

        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;