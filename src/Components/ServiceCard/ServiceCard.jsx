import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const {
    category,
    description,
    image,
    price,
    providerEmail,
    providerName,
    rating,
    serviceId,
    serviceName,
    slotsAvailable,
  } = service;
  console.log(service);
  return (
    <div>
      <div className="w-11/12 mx-auto ">
        <div className="">
          <div className="card  bg-base-100 w-full shadow-2xl  ">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
                {serviceName}
              </h2>
              <div className="flex font-bold">
                <p className="">Price : {price} BDT</p>
                <p className="">Rating : {rating}</p>
              </div>
              <div className="card-actions w-full justify-center">
                <Link
                  to={`/services/${serviceId}`}
                  className="btn w-full btn-primary"
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
