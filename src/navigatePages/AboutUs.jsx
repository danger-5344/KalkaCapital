import React from "react";

const cardArray = [
  {
    title: "Loans",
    desc: "We can help you unlocking financial freedom.",
  },
  {
    title: "Insurance",
    desc: "Did you find best insurance for yourself yet?",
  },
  {
    title: "Construction",
    desc: "Building your imagination is our destination.",
  },
  {
    title: "Investment",
    desc: "Your money can have better place than bank.",
  },
  {
    title: "Business Consultancy",
    desc: "Are you worried or have doubts? Regarding the starting in business, Talk to us.",
  },
];

const Card = ({ title, desc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-xl font-semibold text-red-500">{title}</h3>
      <p className="text-gray-700 mt-4">{desc}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="p-12 bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="py-12 px-6">
        <div className="container mx-auto ">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-4 font-light">
            Empowering businesses with cutting-edge finance solutions.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Who We Are Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <div className="md:flex gap-2">
            <div>
              <p className="text-lg leading-relaxed w-4/5 text-gray-700">
                At
                <span className="font-semibold text-red-500">
                  Kalka Capital
                </span>
                , we are a passionate team dedicated to Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Quibusdam facere consequatur
                praesentium saepe esse ea, voluptatum voluptate ratione dicta
                illum vero minima doloribus veniam consequuntur laborum
                excepturi reprehenderit nihil quia magni iusto. Nisi minus animi
                optio laudantium magni est fuga repellat. Alias maiores sed
                nulla quisquam corrupti provident, autem quo beatae quibusdam
                adipisci deserunt architecto ipsam, ut nihil. Maiores, maxime
                aspernatur soluta accusantium dolores nesciunt tempore esse
                tempora nemo, voluptate, aliquam in? Odio mollitia aliquid,
                dolorum distinctio iure repellat inventore quis voluptatum illo
                ut quia tempore.
              </p>
            </div>
            <div>
              <img
                src="https://media.istockphoto.com/id/2172009103/photo/businessman-working-on-financial-report-of-corporate-operations-balance.jpg?s=2048x2048&w=is&k=20&c=TWfx4rumBkymSU1z8UQRXR-3hFJYcqfvGHSJwqtMZNA="
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-right">Foundation By Founder</h2>
          <div className="md:flex gap-2">
          <div>
              <img
                src="https://media.istockphoto.com/id/2172009103/photo/businessman-working-on-financial-report-of-corporate-operations-balance.jpg?s=2048x2048&w=is&k=20&c=TWfx4rumBkymSU1z8UQRXR-3hFJYcqfvGHSJwqtMZNA="
                alt=""
              />
            </div>
            <div>
              <p className="text-lg leading-relaxed w-4/5 ml-auto text-gray-700">
                I am founder, I have an idea and also have work experience in soso work, The idea of opening 
                <span className="font-semibold text-red-500">
                  Kalka Capital
                </span>
                came in my mind in 2020, we are a passionate team dedicated to Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Quibusdam facere consequatur
                praesentium saepe esse ea, voluptatum voluptate ratione dicta
                illum vero minima doloribus veniam consequuntur laborum
                excepturi reprehenderit nihil quia magni iusto. Nisi minus animi
                optio laudantium magni est fuga repellat. Alias maiores sed
                nulla quisquam corrupti provident, autem quo beatae quibusdam
                adipisci deserunt architecto ipsam, ut nihil. Maiores, maxime
                aspernatur soluta accusantium dolores nesciunt tempore esse
              </p>
            </div>
          
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gray-100 rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            Our mission is to deliver unparalleled financial solutions that
            inspire growth and success. We believe in creating meaningful
            experiences that connect people with their needs.
          </p>
        </section>

        {/* What We Do Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardArray.map((cardData) => (
              <Card title={cardData.title} desc={cardData.desc} />
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-red-500 text-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Why Choose Us?
          </h2>
          <p className="text-lg leading-relaxed text-center">
            We combine creativity, technology, and strategy to deliver impactful
            solutions. With a client-first approach, we ensure that your vision
            is realized to perfection.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
