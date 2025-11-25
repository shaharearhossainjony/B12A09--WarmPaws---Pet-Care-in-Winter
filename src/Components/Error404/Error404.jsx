import React from "react";
import { useRouteError, useNavigate } from "react-router";
import ErrorImg from "../../assets/error-404.png";

const Error404 = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const toHome = () => navigate("/");
  const toServices = () => navigate("/services");

  return (
    <div className="error-page-container">
      <div className="flex justify-center items-center">
        <img src={ErrorImg} alt="404 Error" />
      </div>

      <div className="error-message text-center">
        <h2 className=" py-5 text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500">
          Sorry, the page you are looking for might be removed, renamed, or is
          temporarily unavailable+
        </p>
      </div>

      <div className="flex justify-center space-x-4 my-6">
        <button
          onClick={toHome}
          className="btn bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go to Home
        </button>
        <button
          onClick={toServices}
          className="btn hover:btn-primary border-[#632EE3]  text-[#632EE3]  hover:text-white text-blue py-2 px-4 rounded"
        >
          Go to Services
        </button>
      </div>
    </div>
  );
};

export default Error404;
