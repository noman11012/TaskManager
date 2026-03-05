import React from "react";

const TaskStatus = ({selectedTicket, TaskStatusHandle}) => {

    function handleTask() {
        TaskStatusHandle(selectedTicket);
    }
  return (
    <div>

      <div className="space-y-1">

      
         <div className="card bg-base-100 shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">
        {selectedTicket.title}
      </h2>

      <button onClick={()=>handleTask()} className="btn btn-success w-full text-lg">
        Complete
      </button>
        </div>

      </div>
    </div>
  );
};

export default TaskStatus;