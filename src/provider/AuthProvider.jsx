import React, { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading , setLoading] = useState(true);

  

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // google login function

  const userLogInGoogle = ()=>
  {
    return signInWithPopup(auth,googleProvider)
  }

// Log Out Function
  const logOutUser = () =>
  {
    return signOut(auth);
  }

//   LOG In Function
  const loginUser = (email, password) =>
  {  setLoading(true);
    return signInWithEmailAndPassword(auth, email , password)
  }

  // update profile function

  const profileUpdate = (updateData) =>
  {
    return updateProfile(auth.currentUser ,updateData );
  }

// Observer Function
useEffect (()=>{
     const unsubscribe=  onAuthStateChanged(auth , (CurrentUser)=>{
         setUser(CurrentUser);
         setLoading(false);
    });

    return ()=>
    {
          unsubscribe();
    }
} ,[] )

  const authData = {
    user,
    setUser,
    createUser,
    logOutUser,
    loginUser,
    loading,
    setLoading,
    profileUpdate,
    userLogInGoogle
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
