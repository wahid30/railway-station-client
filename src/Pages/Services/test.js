import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
// import useTitle from "../../../hooks/useTitle";

const Register = () => {
  // useTitle("Register");
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-bg">
      <div className="">
        <div className="flex justify-center items-center py-10">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Register now!</h1>
              <p className="py-6">Lorem ipsum dolor sit amet.</p>
            </div>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User name"
                  name="username"
                  className="input input-bordered"
                />
              </div>
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
                    to="/login"
                    className="label-text-alt link link-hover text-red-800"
                  >
                    Already Have an account? Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;