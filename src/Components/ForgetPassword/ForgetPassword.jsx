import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const defaultEmail = location.state?.email || "";
  const [email, setEmail] = useState(defaultEmail);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = () => {
    if (!email) {
      setError("Please enter your email");
      return;
    }

    resetPassword(email)
      .then(() => {
        setMessage("Password reset email sent!");

      
        window.open("https://mail.google.com/mail", "_blank");
      })
      .catch(() => {
        setError("Failed to send reset email. Please check email.");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-xl font-bold mb-4 text-center bg-gradient-to-r from-[#7F00FF] to-[#E100FF] bg-clip-text text-transparent">
              Forget Password
            </h2>

            <div className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              {message && (
                <p className="text-green-600 text-sm mt-2">{message}</p>
              )}
              {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

              <button
                className="btn mt-6 w-full bg-purple-700 hover:bg-purple-800 text-white"
                onClick={handleResetPassword}
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
