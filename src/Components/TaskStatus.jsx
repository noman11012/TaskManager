import React from "react";

const TaskStatus = () => {
  return (
    <div>
      <h2 className="text-sm font-bold mb-1">Task Status</h2>

      <div className="space-y-1">

        {/* Task 1 */}
         <div className="card bg-base-100 shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">
        Payment Failed - Card Declined
      </h2>

      <button className="btn btn-success w-full text-lg">
        Complete
      </button>
        </div>

      

        {/* Resolved */}
        <div className="mt-[2px]">
          <h3 className="text-xs font-semibold">Resolved Task</h3>
          <p className="text-[10px] text-gray-400">
            No resolved tasks yet.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TaskStatus;