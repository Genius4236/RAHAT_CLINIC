import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Frontend_App from "./Frontend_App.jsx";

export const Context=createContext({ isAuthenticated: false });

const AppWrapper=()=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [admin, setAdmin] = useState({});
  const [user, setUser] = useState({});

  return (
    <Context.Provider
      value={{isAuthenticated,setIsAuthenticated,admin,setAdmin}}
      value_user={{isAuthenticated,setIsAuthenticated,user,setUser}}
    >
      <App />
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);