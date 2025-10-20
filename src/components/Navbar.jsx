import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userimg from '../assets/user.png'
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


const Navbar = () => {

  const {user ,logOutUser} = use(AuthContext);

  const handleLogOut = ()=>
  {
    logOutUser()
    .then(() =>{
     
      toast.success('LogOut Done');
    })
    .catch(error =>
    {
      toast.error(error.message);
    }
    )
  }

  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userimg}`} alt="" />
        {
          user ? <button onClick={handleLogOut} className="btn btn-primary px-10 ">LogOut</button> : <Link to='/auth/login' className="btn btn-primary px-10 ">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
