import React from 'react';

// LoanCard Component
const LoanCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-red-500">{title}</h3>
    <p className="text-gray-700 mt-4">{description}</p>
  </div>
);

// LoanPage Component
const LoanPage = () => {
  // Loan Data Array
  const loanOptions = [
    {
      title: 'Home Loans',
      description:
        'Fulfill your dream of owning a home with our affordable home loan options, featuring competitive interest rates and flexible terms.',
    },
    {
      title: 'Personal Loans',
      description:
        'Get quick and hassle-free personal loans to meet your immediate financial needs with minimal documentation.',
    },
    {
      title: 'Business Loans',
      description:
        'Scale your business with customized business loans, designed to support your growth and expansion plans.',
    },
    {
      title: 'Car Loans',
      description:
        'Drive your dream car with our easy car loan options, offering fast approvals and low EMIs.',
    },
    {
      title: 'Education Loans',
      description:
        'Invest in your future with our education loans, offering financial assistance for higher studies in India and abroad.',
    },
    {
      title: 'Debt Consolidation Loans',
      description:
        'Simplify your finances by consolidating your existing loans into one easy-to-manage repayment plan.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Available Loans Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Loan Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanOptions.map((loan, index) => (
              <LoanCard key={index} title={loan.title} description={loan.description} />
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-red-500 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg leading-relaxed mb-6">
            Apply for a loan today and take the first step towards achieving your goals. Our 
            team is here to guide you through every step of the process.
          </p>
          <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
            Apply Now
          </button>
        </section>
      </main>

    </div>
  );
};

export default LoanPage;
