import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../Firebaseinte/Firebaseinte.js";
export const AuthContext = createContext();
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

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

    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, provider);
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
    googleLogin,
    loading,
  };
  return <AuthContext.Provider value={onOuth}>{children}</AuthContext.Provider>;
};

export default Authprovider;
