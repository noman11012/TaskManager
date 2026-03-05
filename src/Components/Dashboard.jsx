import React from "react";

import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";

const Dashboard = ({task,resolve}) => {
  return (
    <div className=" bg-base-200">

      <div className="p-6 grid md:grid-cols-2 gap-6">

        {/* CARD 1 */}
        <div className="relative overflow-hidden  shadow-xl
                        bg-gradient-to-r 
                        from-purple-600 
                        via-indigo-500 
                        to-purple-500
                        text-white">

         
          <img
            src={vector1}
            alt=""
            className="absolute 
                       -top-16 -right-16
                       w-[380px]
                       opacity-35
                       pointer-events-none"
          />

      
          <img
            src={vector2}
            alt=""
            className="absolute 
                       -bottom-16 -left-16
                       w-[380px]
                       opacity-35
                       pointer-events-none"
          />

          <div className="relative z-10 p-10 text-center">
            <h2 className="text-lg font-medium opacity-90">
              In-Progress
            </h2>
            <p className="text-6xl font-bold mt-4">{task}</p>
          </div>
        </div>


        {/* CARD 2 */}
        <div className="relative overflow-hidden  shadow-xl
                        bg-gradient-to-r 
                        from-green-500 
                        via-emerald-500 
                        to-teal-500
                        text-white">

          <img
            src={vector1}
            alt=""
            className="absolute 
                       -top-16 -right-16
                       w-[380px]
                       opacity-35
                       pointer-events-none"
          />

          <img
            src={vector2}
            alt=""
            className="absolute 
                       -bottom-16 -left-16
                       w-[380px]
                       opacity-35
                       pointer-events-none"
          />

          <div className="relative z-10 p-10 text-center">
            <h2 className="text-lg font-medium opacity-90">
              Resolved
            </h2>
            <p className="text-6xl font-bold mt-4">{resolve}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;