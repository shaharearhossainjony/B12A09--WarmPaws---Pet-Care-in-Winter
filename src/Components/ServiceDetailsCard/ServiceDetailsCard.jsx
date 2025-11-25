import React, { useState } from "react";

const ServiceDetailsCard = ({ service }) => {
  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
    serviceId,
  } = service;

  const [form, setForm] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "" });
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="w-11/12 mx-auto my-10 rounded-2xl shadow-lg bg-white overflow-hidden border border-gray-200">
      <div className="relative  w-full">
        <img
          src={image}
          alt={serviceName}
          className="object-cover w-full h-full"
        />
        <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow">
          NEW
        </span>
      </div>

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-bold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
          {serviceName}
        </h2>

        <p className="text-gray-600 text-sm">{description}</p>

        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 bg-gray-50 p-3 rounded-xl">
          <p>
            <strong>Provider:</strong> {providerName}
          </p>
          <p>
            <strong>Email:</strong> {providerEmail}
          </p>
          <p>
            <strong>Service ID:</strong> {serviceId}
          </p>
          <p>
            <strong>Category:</strong> {category}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <div className="badge badge-outline border-purple-700">
            Rating: {rating}
          </div>
          <div className="badge badge-outline border-purple-700">
            Slots: {slotsAvailable}
          </div>
        </div>

        <p className="text-lg font-semibold text-purple-700">
          ${price} / service
        </p>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full rounded-lg"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-lg"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <button className="btn btn-primary w-full rounded-lg" type="submit">
            Book Now
          </button>
        </form>

        {success && (
          <div className="alert alert-success mt-3 py-2 rounded-lg">
            <span>Booking Successful!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailsCard;
