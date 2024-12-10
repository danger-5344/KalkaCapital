import React, { useState } from "react";
import SIPCalculator from "../components/Tools/SipCalculator";
import EMICalculator from "../components/Tools/EmiCalculator";

const Tools = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="mx-auto px-4 py-8 bg-gray-50 pt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 p-3 rounded-lg ">
        {/* Calculator Container */}
        <div className="w-full md:w-2/3 ">
         
          {!isSelected ? <SIPCalculator /> : <EMICalculator />}
        </div>

        {/* Button Container */}
        <div className="flex flex-col items-center md:w-1/3">
          <button
            className="btn bg-red-500 hover:bg-red-600 text-white shadow-lg w-full md:w-auto px-6 py-3 rounded-md font-bold transition duration-300 ease-in-out"
            onClick={() => setIsSelected((prev) => !prev)}
          >
            {isSelected ? "Switch to SIP Calculator" : "Switch to EMI Calculator"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
