import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const LogIn = () => {
  const { loginUser } = use(AuthContext);

  const [error , setError] = useState('')

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.password.value;
   
    loginUser(email, pass)
    .then(() =>
    {
      
       toast.success('LOG IN SUCCESSFUL');
       navigate(`${location.state ? location.state : '/'}`);

     
    }
    )
    .catch(error =>
    {
      toast.error(error.message);
      setError(error.code)
    }
    )
  };

  return (
    <div className="flex items-center min-h-screen ">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="font-bold text-2xl text-center  ">
          Log In Your Account
        </h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            <label className="label font-bold text-black my-3">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label font-bold text-black my-3">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />
            {
              error && <p className="text-red-500 font-semibold mt-2 text-center ">{error}</p>
            }

            <button className="btn btn-neutral mt-4">Login</button>
            <p className="mt-5 text-center font-semibold">
              Don't Have An Account ?{" "}
              <Link
                to="/auth/register"
                className="text-red-500  hover:text-red-800"
              >
                Register
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
