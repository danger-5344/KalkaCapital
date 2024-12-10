import React, { useState } from "react";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [annualRate, setAnnualRate] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [maturityAmount, setMaturityAmount] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(annualRate) / 100 / 12; // Monthly interest rate
    const n = parseInt(investmentPeriod) * 12; // Total number of months

    if (P && r && n) {
      // Maturity amount formula for SIP: P × [(1 + r)^n - 1] × (1 + r) / r
      const maturity =
        P * (((1 + r) ** n - 1) * (1 + r)) / r;
      setMaturityAmount(maturity.toFixed(2));
    } else {
      alert("Please enter valid inputs");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-4xl font-semibold text-center text-red-600 mb-8">
        SIP Calculator
      </h2>

      {/* Monthly Investment */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Monthly Investment (₹)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
            className="w-28 p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-red-500 shadow-sm transition duration-200 ease-in-out"
          />
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(e.target.value)}
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
            max="20"
            step="0.1"
            value={annualRate}
            onChange={(e) => setAnnualRate(e.target.value)}
            className="w-full accent-red-500 rounded-lg"
          />
        </div>
      </div>

      {/* Investment Period */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-800 mb-2">
          Investment Period (Years)
        </label>
        <div className="flex items-center gap-4">
          <input
            type="number"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            className="w-28 p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:border-red-500 shadow-sm transition duration-200 ease-in-out"
          />
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(e.target.value)}
            className="w-full accent-red-500 rounded-lg"
          />
        </div>
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateSIP}
        className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Calculate
      </button>

      {/* Maturity Amount */}
      {maturityAmount && (
         <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg text-red-600 shadow-md">
         <h3 className="text-xl font-semibold text-center">
           Your Monthly EMI: ₹{maturityAmount}
         </h3>
       </div>
      )}
    </div>
  );
};

export default SIPCalculator;
