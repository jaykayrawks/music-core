import { createContext, useContext, useEffect,useMemo, useState } from "react";

type Token = string | null;
type Context={
  token:Token;
  setToken:(token:Token )=>void;
      removeToken:()=>void;
}
const AuthContext = createContext<Context >({token:null, setToken:()=>{}, removeToken:()=>{}});

const AuthProvider = ({ children }) => {
  const [token, _setToken] = useState<string | null>(localStorage.getItem("token"));

  const setToken = (newToken: string | null) => {
    _setToken(newToken);
  };
  useEffect(() => {
    if (token) {
      localStorage.setItem('token',token);
    } else {
      localStorage.removeItem('token')
    }
  }, [token]);

  const removeToken=()=>{
    setToken(null);
    localStorage.removeItem('token')
  }
 const contextValue = useMemo<Context>(
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