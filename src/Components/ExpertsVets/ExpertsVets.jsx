import React, { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import Loader from "../Loader/Loader";
import 'animate.css'

const ExpertsVets = () => {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/expertsData.json")
      .then((res) => res.json())
      .then((data) => {
        setExperts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="my-5 text-center">
      <div className="py-16 bg-gray-50">
        <h2 className="animate__animated animate__pulse  text-center text-3xl font-bold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent mb-10">
          Meet Our Expert Vets
        </h2>

        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl px-4">
          {experts.map((vet) => (
            <motion.div
              key={vet.id}
              style={{ borderRadius: 16 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              whileHover={{
                scale: [null, 1.05, 1.12],
                transition: {
                  duration: 0.4,
                  times: [0, 0.6, 1],
                  ease: ["easeInOut", "easeOut"],
                },
              }}
            >
              <img
                src={vet.img}
                alt={vet.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-700">
                  {vet.name}
                </h3>
                <p className="text-gray-600 mt-1">{vet.specialty}</p>
                <p className="text-gray-500 text-sm mt-1">{vet.experience}</p>
                <button className="w-full mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md transition">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertsVets;
