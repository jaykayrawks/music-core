import { lazy } from "react";
import { useAuth } from "./provider/AuthProvider";
import Login from "./login";
import { hasPermission } from "./utils";

const Collection = lazy(()=>import ('library/collection'));

const Home = () => {
  const { token,removeToken } = useAuth();
  const canEdit = hasPermission(token?.split('-')[0], 'delete');

  return <>
    {token?
    <>
    <header>
        <div className='flex'>
          <button onClick={removeToken}>Logout</button>
        </div>
      </header>
    <Collection canEdit={canEdit} />
    </>:
    <Login />
    }
    </>
};

export default Home;