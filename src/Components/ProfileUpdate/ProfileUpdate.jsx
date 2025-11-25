import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const ProfileUpdate = () => {
  const { user, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = () => {
    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Update Profile</title>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label className="label mt-3">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Enter your photo URL"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />

              <button
                onClick={handleUpdate}
                className="text-center mt-6 w-full font-bold bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg text-lg transition"
              >
                Update Now
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
