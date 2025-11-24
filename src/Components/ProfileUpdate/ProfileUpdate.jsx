import React from "react";
import { Link } from "react-router";

const ProfileUpdate = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Update Profile</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />

              <label className="label mt-3">Photo URL</label>
              <input
                type="text"
                placeholder="Enter your Photo URL"
                className="input pt-2"
                required
              />

              <Link
                to={"/profile"}
                className="text-center mt-6 w-full font-bold bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg text-lg transition inline-block"
              >
                Update Now
              </Link>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
