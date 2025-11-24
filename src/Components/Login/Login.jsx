import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn  mt-4  bg-purple-700 hover:bg-purple-800 text-white">
                  Login
                </button>
                <p className="font-semibold text-center pt-5">
                  Dont’t Have An Account ?{" "}
                  <Link
                    className="bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent"
                    to="/register"
                  >
                    Register
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;