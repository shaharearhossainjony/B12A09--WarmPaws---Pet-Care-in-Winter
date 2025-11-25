import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { price, rating, serviceId, serviceName, image } = service;
  console.log(service);
  return (
    <div>
      <div className="w-11/12 mx-auto ">
        <div className="">
          <div className="card  bg-base-100 w-full shadow-2xl  ">
            <figure>
              <img src={service.image} alt={service.serviceName} />
            </figure>
            <div className="card-body">
              <h2 className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
                {serviceName}
              </h2>
              <div className="flex font-bold">
                <p className="text-gray-600">Price : ${price} USD</p>
                <p className="text-gray-600">Rating : {rating}</p>
              </div>
              <div className="card-actions w-full justify-center">
                <Link
                  to={`/services/${serviceId}`}
                  className="btn w-full btn-primary "
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
