import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import useTitle from "../../../hooks/useTitle";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  // useTitle("Login");
  const { singIn, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    // form.reset();

    singIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // navigate("/");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-bg">
      <div className="">
        <div className="flex justify-center items-center py-10">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-400 p-5">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">Welcome To this era</p>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link
                    to="/signUp"
                    className="label-text-alt link link-hover text-red-800"
                  >
                    Sign Up?
                  </Link>
                </label>
                <span className="text-danger">{error}</span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleGoogleSingIn} className="btn btn-accent">
                  Google Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;