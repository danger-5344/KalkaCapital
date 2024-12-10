import React, { useState } from "react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000);
  const [annualRate, setAnnualRate] = useState(10);
  const [loanTenure, setLoanTenure] = useState(12);
  const [emiAmount, setEmiAmount] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(annualRate) / 100 / 12; // Monthly interest rate
    const n = parseInt(loanTenure) * 12; // Total number of months

    if (P && r && n) {
      const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmiAmount(emi.toFixed(2));
    } else {
      alert("Please enter valid inputs");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-4xl font-semibold text-center text-red-600 mb-8">
        EMI Calculator
      </h2>

      {/* Loan Amount */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Loan Amount (₹)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-28 p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-red-500 shadow-sm transition duration-200 ease-in-out"
          />
          <input
            type="range"
            min="500"
            max="1000000"
            step="500"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full accent-red-500 rounded-lg"
          />
        </div>
      </div>

      {/* Annual Interest Rate */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Annual Interest Rate (%)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-28 p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-red-500 shadow-sm transition duration-200 ease-in-out"
          />
          <input
            type="range"
            min="1"
            max="30"
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full accent-red-500 rounded-lg"
          />
        </div>
      </div>

      {/* Loan Tenure */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Loan Tenure (Years)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-28 p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-red-500 shadow-sm transition duration-200 ease-in-out"
          />
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full accent-red-500 rounded-lg"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateEMI}
        className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Calculate EMI
      </button>

      {/* EMI Result */}
      {emiAmount && (
        <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-red-600 shadow-md">
          <h3 className="text-xl font-semibold text-center">
            Your Monthly EMI: ₹{emiAmount}
          </h3>
        </div>
      )}
    </div>
  );
};

export default EMICalculator;
