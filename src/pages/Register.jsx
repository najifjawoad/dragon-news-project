import React, { use, useState } from "react";
import { CgPassword } from "react-icons/cg";
import { Link, Navigate, useNavigate,  } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser, profileUpdate } = use(AuthContext);
  const [nameError, setNameError] = useState("");

  const navigate = useNavigate();


  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const photoURLL = event.target.photoURL.value;
    const email = event.target.email.value;
    const pass = event.target.password.value;
  

    if (name.length < 5) {
      setNameError("Name length should be atleast 5 characters");
      return;
    } else {
      setNameError("");
    }
    createUser(email, pass)
      .then((result) => {
        const user = result.user;
        toast.success("DONE REGISTER");
        profileUpdate({displayName:name,photoURL:photoURLL}).then(()=>
        {
          setUser({...user,displayName:name,photoURL:photoURLL});
          navigate('/');
        }).catch((error)=>{

            toast(error.message);
        } )
        

      })
      .catch((error) => {
       

        if (error.code === "auth/weak-password") {
          toast.error("6 digits minimum needed");
        }
      });
  };

  return (
    <div className="flex items-center min-h-screen ">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl py-5 ">
        <h2 className="font-bold text-2xl text-center  ">
          Register Your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-bold text-black my-3">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && (
              <p className="text-red-500 text-center font-semibold">
                {nameError}
              </p>
            )}
            {/* photoURL */}
            <label className="label font-bold text-black my-3">Photo URL</label>
            <input
              name="photoURL"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
            {/* email */}
            <label className="label font-bold text-black my-3">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* pass */}
            <label className="label font-bold text-black my-3">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <label className="label mt-4">
              <input
                name="checkbox"
                type="checkbox"
                className="checkbox"
                required
              />
              Accept Term & Conditions
            </label>

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="mt-5 text-center font-semibold">
              Alread Have An Account ?{" "}
              <Link
                to="/auth/login"
                className="text-red-500  hover:text-red-800"
              >
                Log In
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
