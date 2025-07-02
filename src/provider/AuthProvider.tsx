import { createContext, useContext, useEffect,useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token',token);
    } else {
      localStorage.removeItem('token')
    }
  }, [token]);

  const removeToken=()=>{
    setToken(undefined);
    localStorage.removeItem('token')
  }
 const contextValue = useMemo(
    () => ({
      token,
      setToken,
      removeToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;