import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebaseinte/Firebaseinte.js";
export const Authcontext = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

   const login = (email, password) => {
     setLoading(false);

     return signInWithEmailAndPassword(auth, email, password);
   };

   const signout = () => {
     setLoading(true);
     return signOut(auth);
   };
   const userINfo = (userData) => {
     return updateProfile(auth.currentUser, userData);
   };
 

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => {
      subscriber();
    };
  }, []);

  const onOuth = {
    signup,
    setUser,
    user,
    login,
    signout,
    userINfo,
  };
  return <Authcontext.Provider value={onOuth}>{children}</Authcontext.Provider>;
};

export default Authprovider;
