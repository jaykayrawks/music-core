import { lazy } from "react";
import { useAuth } from "./provider/AuthProvider";
const Collection = lazy(()=>import ('library/collection'));
const Home = () => {
  const { removeToken } = useAuth();

  return <>
    <button onClick={removeToken}>Logout</button>
    <Collection />
    
    </>
};

export default Home;