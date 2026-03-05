import React from 'react';

const ResolveTask = () => {
    return (
        <div>
             <div>

      <div className="space-y-1">

      
         <div className="card bg-base-100 shadow-md p-6 w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4">
        {selectedTicket.title}
      </h2>

      <button className="btn btn-success w-full text-lg">
        Complete
      </button>
        </div>

      </div>
    </div>
        </div>
    );
};

export default ResolveTask;