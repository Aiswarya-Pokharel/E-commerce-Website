import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./css/Register.css";

export default function Register() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const formType = params.get("form");

  const [showSignUp, setShowSignUp] = useState(formType !== "login");
  const [loginPwVisible, setLoginPwVisible] = useState(false);

  useEffect(() => {
    if (formType === "login") setShowSignUp(false);
    else setShowSignUp(true);
  }, [formType]);

  return (
    <div className="authwrapper">
      <div className={`container${showSignUp ? " active" : ""}`}>
        {!showSignUp ? (
          <div className="signIn">
            <form>
              <h2>Login</h2>
              <div className="input_grp">
                <input type="email" id="login-email" required />
                <label htmlFor="login-email">Email</label>
              </div>

              <div className="input_grp" style={{ position: "relative" }}>
                <input
                  type={loginPwVisible ? "text" : "password"}
                  id="login-pw"
                  required
                />
                <label htmlFor="login-pw">Password</label>
                <i
                  className={`fa-solid ${
                    loginPwVisible ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setLoginPwVisible(!loginPwVisible)}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#666",
                  }}
                />
              </div>

              <div className="remember">
                <input type="checkbox" id="login_rem" />
                <label htmlFor="login_rem">Remember me</label>
              </div>

              <button className="btn" type="submit" id="signIn">
                Login
              </button>

              <div className="signIn_btn">
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setShowSignUp(true)}
                    id="sign_in"
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                  </button>
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="signUp">
            <form>
              <h2>Sign Up</h2>
              <div className="input_grp">
                <input type="text" id="username" required />
                <label htmlFor="username">Username</label>
              </div>

              <div className="input_grp">
                <input type="email" id="signUp_email" required />
                <label htmlFor="signUp_email">Email</label>
              </div>

              <div className="input_grp" style={{ position: "relative" }}>
                <input
                  type={loginPwVisible ? "text" : "password"}
                  id="signup-pw"
                  required
                />
                <label htmlFor="signup-pw">Password</label>
                <i
                  className={`fa-solid ${
                    loginPwVisible ? "fa-eye" : "fa-eye-slash"
                  }`}
                  onClick={() => setLoginPwVisible(!loginPwVisible)}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#666",
                  }}
                />
              </div>

              <div className="remember">
                <input type="checkbox" name="remember" id="signup_rem" />
                <label htmlFor="signup_rem">
                  I agree to the terms & conditions
                </label>
              </div>

              <button className="btn" id="signUp" type="submit">
                Sign Up
              </button>

              <div className="signUp_btn">
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setShowSignUp(false)}
                    id="sign_up"
                    style={{
                      background: "none",
                      border: "none",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
