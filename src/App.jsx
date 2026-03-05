
import './App.css'
import './Components/Dashboard'
import Dashboard from './Components/Dashboard'

import Navbar from './Components/Navbar'
import TaskStatus from './Components/TaskStatus';
import TicketCard from './Components/TicketCard';
function App() {

    

  return (
    <>
   <div className="bg-base-200">
      <Navbar></Navbar>
      <Dashboard></Dashboard>
    </div>


    <div className="p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
        <h2 className="text-xl font-bold mb-4">Customer Tickets</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      </div>

        {/* Right Section */}
        <TaskStatus />
      </div>
    </div>
    </>
  )
}

export default App
