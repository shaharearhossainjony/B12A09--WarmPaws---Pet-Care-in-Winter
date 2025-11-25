import React, { useEffect, useState } from "react";
import ServiceDetailsCard from "../ServiceDetailsCard/ServiceDetailsCard";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";

const ServiceDetails = () => {
  const [allServices, setAllServices] = useState([]);
  const [singleService, setSingleService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setAllServices(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (allServices.length > 0) {
      const found = allServices.find((service) => service.serviceId == id);
      setSingleService(found);
    }
  }, [allServices, id]);

  if (!singleService) {
    return <Loader></Loader>;
  }

  return (
    <div className="my-10">
      <ServiceDetailsCard service={singleService} />
    </div>
  );
};

export default ServiceDetails;
