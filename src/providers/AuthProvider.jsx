import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import auth from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null); //1nmbr kaj

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(
        "observing current user inside useEffect of AuthProvider is",
        currentUser
      );
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //2nmbr kaj <AuthContext.Provider value={AuthInfo}>
  const AuthInfo = {
    // name: "Sohel",
    user,
    loading,
    createUser,
    signInUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.PropTypes = {
  children: PropTypes.node,
};

/*
1nmbr kaj =createContext() & export it
2nmbr kaj = <AuthContext.Provider value={AuthInfo}>  ;set provider+value set
3nmbr kaj  = main.jsx e ase ai kajti korte hobe  
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
4nmbr kaj = AuthProvider.jsx e ({children }) hisebe dokate hobe

*/
