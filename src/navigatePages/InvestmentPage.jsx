import React from 'react';

// InvestmentCard Component
const InvestmentCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-red-500">{title}</h3>
    <p className="text-gray-700 mt-4">{description}</p>
  </div>
);

// InvestmentPage Component
const InvestmentPage = () => {
  // Investment Data Array
  const investmentOptions = [
    {
      title: 'Mutual Funds',
      description:
        'Diversify your portfolio with professionally managed mutual funds for long-term financial growth.',
    },
    {
      title: 'Fixed Deposits',
      description:
        'Secure your savings with fixed deposits offering guaranteed returns and flexible tenures.',
    },
    {
      title: 'Stock Market',
      description:
        'Invest in the stock market and benefit from high-growth opportunities with expert advice.',
    },
    {
      title: 'Real Estate',
      description:
        'Explore real estate investments for stable and long-term returns with capital appreciation.',
    },
    {
      title: 'Retirement Plans',
      description:
        'Plan your golden years with retirement plans designed for financial security and peace of mind.',
    },
    {
      title: 'Gold Investments',
      description:
        'Invest in gold for portfolio diversification and a hedge against market volatility.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Introduction Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Invest with Us?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <span className="font-semibold text-red-500">Kalka Capital</span>, we 
            provide expert guidance and diverse investment options to help you achieve your 
            financial goals. Whether you're a seasoned investor or just starting, we have the 
            right solution for you.
          </p>
        </section>

        {/* Available Investments Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Investment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentOptions.map((investment, index) => (
              <InvestmentCard
                key={index}
                title={investment.title}
                description={investment.description}
              />
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-red-500 text-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Investing Today</h2>
          <p className="text-lg leading-relaxed mb-6">
            Take control of your financial future with the right investment plan. Our team is 
            here to guide you every step of the way.
          </p>
          <button className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
            Invest Now
          </button>
        </section>
      </main>
    </div>
  );
};

export default InvestmentPage;
