import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const PopularWinterCareServices = () => {
  const [careServices, setCareServices] = useState([]);
  console.log(careServices);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setCareServices(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="my-10 text-center">
      <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
        Popular Winter Care Services
      </h2>
      <div className="w-11/12  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
        {careServices.slice(0, 9).map((service) => (
          <ServiceCard key={service.serviceId} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default PopularWinterCareServices;
