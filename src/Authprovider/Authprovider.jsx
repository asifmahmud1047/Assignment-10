import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { subscribe } from "firebase/data-connect";
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

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => {
      subscribe();
    };
  }, []);

  const onOuth = {
    signup,
    setUser,
    user,
  };
  return <Authcontext.Provider value={onOuth}>{children}</Authcontext.Provider>;
};

export default Authprovider;
