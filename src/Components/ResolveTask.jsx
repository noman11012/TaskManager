import React from 'react';

const ResolveTask = ({selectedTicket, ResolveTaskHandle}) => {
  
  function handleTask() {
    ResolveTaskHandle(selectedTicket);
  }

  return (
    <div className="space-y-1">
      <div className="card bg-base-100 shadow-md p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          {selectedTicket.title}
        </h2>

        <button
          onClick={()=>handleTask()}
          className="btn btn-success w-full text-lg"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default ResolveTask;