import ServiceCard from "../components/ServiceCard";
import icon from "../assests/Images/indian-rupee-investment-concept.jpg";
const serviceData = [
  {
    service: "service name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunfkdsfdj kasfsjdasdaksjkd jasakasdaskdknasd",
    color: "green",
    icon: icon,
  },
  {
    service: "service name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunfkdsfdj kasfsjdasdaksjkd jasakasdaskdknasd",
    color: "blue",
    icon: icon,
  },
  {
    service: "service name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunfkdsfdj kasfsjdasdaksjkd jasakasdaskdknasd",
    color: "red",
    icon: icon,
  },
  {
    service: "service name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunfkdsfdj kasfsjdasdaksjkd jasakasdaskdknasd",
    color: "purple",
    icon: icon,
  },
  {
    service: "service name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunfkdsfdj kasfsjdasdaksjkd jasakasdaskdknasd",
    color: "grat",
    icon: icon,
  },
  {
    service: "service name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sunfkdsfdj kasfsjdasdaksjkd jasakasdaskdknasd",
    color: "black",
    icon: icon,
  },
];
function Services() {
  return (
    <section className="my-10">
      <div className="container">
        <h2 className="section-title my-5">What we provide for your feasability.</h2>

        <div className="container">
          <div className="cardsContainer md:grid grid-cols-2 lg:grid-cols-3">
            {serviceData.map((services) => (
              <ServiceCard
                service={services.service}
                desc={services.desc}
                color={services.color}
                icon={services.icon}
                key={services.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
