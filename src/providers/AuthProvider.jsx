import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import auth from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null); //1nmbr kaj

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        // ...
        setUser(currentUser);
        console.log(
          "observing current user inside useEffect of AuthProvider is",
          currentUser
        );
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  //2nmbr kaj <AuthContext.Provider value={AuthInfo}>
  const AuthInfo = {
    // name: "Sohel",
    user,
    createUser,
    signInUser,
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
