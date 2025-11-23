import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [allServices, setAllServices] = useState([]);

  useEffect(() => {
    fetch("./services.json")
      .then((result) => result.json())
      .then((data) => setAllServices(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <div className="text-center mt-5 ">
        <h2 className="text-4xl font-extrabold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
          Explore Our Winter Pet Care Services
        </h2>
        <p className="my-3 text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Explore our special winter care services designed to keep your pets
          warm, safe, and happy during the cold season.
        </p>
      </div>
      <div>
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
          {allServices.map((service) => (
            <ServiceCard
              key={service.serviceId}
              service={service}
            ></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
