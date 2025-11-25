import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Loader/Loader";
import { Edit3, Mail, UserRound } from "lucide-react";
import UserIcon from "../../assets/UserIcon.svg";
import { Link } from "react-router";

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading || user === undefined) {
    return <Loader />;
  }

  if (user === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
          <div className="flex justify-center mb-5">
            <div className="w-32 h-32 rounded-full border-4 border-[#7F00FF] shadow">
              <img
                src={UserIcon}
                alt="Guest"
                className="w-full h-full rounded-full"
              />
            </div>
          </div>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent flex items-center justify-center gap-2">
            <UserRound color="#7F00FF" /> Guest User
          </h2>

          <p className="text-gray-600 mt-1 flex justify-center items-center gap-2">
            <Mail size={18} />
            Not logged in
          </p>

          <button
            disabled
            className="btn w-full mt-6 bg-gray-300 text-gray-500 cursor-not-allowed flex justify-center gap-2"
          >
            <Edit3 size={18} />
            Update Profile
          </button>
        </div>
      </div>
    );
  }

  const { displayName, email, photoURL } = user;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <title>WarmPaws - Profile</title>

      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center mb-5">
          <img
            src={photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-600 shadow-md"
          />
        </div>

        <h2 className="text-2xl font-bold text-gray-800">{displayName}</h2>
        <p className="text-gray-600 mt-1">{email}</p>

        <Link
          to="/profile/update"
          className="btn mt-6 w-full font-bold bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-lg text-lg transition"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;
