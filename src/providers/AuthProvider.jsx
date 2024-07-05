import React, { createContext } from "react";
import PropTypes from "prop-types"; // ES6

export const AuthContext = createContext(null); //1nmbr kaj

const AuthProvider = ({ children }) => {
  //2nmbr kaj <AuthContext.Provider value={AuthInfo}>
  const AuthInfo = {
    name: "Sohel",
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
1nmbr kaj =create context() & export it
2nmbr kaj = <AuthContext.Provider value={AuthInfo}>  ;set provider+value set
3nmbr kaj  = main.jsx e ase ai kajti korte hobe  
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
4nmbr kaj = AuthProvider.jsx e ({children }) hisebe dokate hobe

*/
