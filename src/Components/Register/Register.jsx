import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />
              {/* photo url */}
              <label className="label">Photo URL</label>
              <input
                name="photoURL"
                type="text"
                className="input"
                placeholder="Enter your photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <button className="btn btn-neutral mt-4">Register</button>
              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link className="text-secondary" to="/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
