import React from 'react';

const ExpertsVets = () => {
    return (
      <div className="my-5 text-center">
        <div className="py-16 bg-gray-50">
          <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent mb-10">
            Meet Our Expert Vets
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/kpB1KWF/4.jpg"
                alt="Vet"
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-700">
                  Dr. Alexa Snow
                </h3>
                <p className="text-gray-600 mt-1">
                  Winter Dermatology & Paw Care
                </p>
                <p className="text-gray-500 text-sm mt-1">8 Years Experience</p>
                <button className="w-full mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md transition">
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/XZxY9yRr/3.jpg"
                alt="Vet"
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-700">
                  Dr. Selena Gomez
                </h3>
                <p className="text-gray-600 mt-1">Cold Weather Nutrition</p>
                <p className="text-gray-500 text-sm mt-1">6 Years Experience</p>
                <button className="w-full mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md transition">
                  Book Appointment
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/FLjGCgJB/1.jpg"
                alt="Vet"
                className="w-full h-80 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-purple-700">
                  Dr. Scarlett Pine
                </h3>
                <p className="text-gray-600 mt-1">Pet Allergies & Dry Skin</p>
                <p className="text-gray-500 text-sm mt-1">5 Years Experience</p>
                <button className="w-full mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md transition">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExpertsVets;