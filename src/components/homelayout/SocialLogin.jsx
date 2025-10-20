import React, { use } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";
  import {  toast } from 'react-toastify';


const SocialLogin = () => {

    
const { user ,userLogInGoogle } = use(AuthContext);

  const handleLogInGoogle = () =>
  {
    
         userLogInGoogle().
         then(()=>
        {   toast('Google Log In Successful')

        }).catch((error)=>{
          toast(error.message)

        } )
  }

  
  return (
    <div>
      <div className="space-y-3">
        {user ? (
          ""
        ) : (
          <>
            <h2 className="font-bold mb-5">Login With</h2>
            <button onClick={handleLogInGoogle} className="btn btn-secondary btn-outline w-full">
              <FcGoogle size={24} /> Login with Google
            </button>
            <button className="btn btn-outline btn-primary w-full">
              <FaGithub size={24} /> Login with Github
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SocialLogin;
