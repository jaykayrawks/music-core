import { useId, useRef } from "react";
import { useAuth } from "./provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const pwdId = useId();
  const userId = useId();
  const userRef = useRef<HTMLInputElement | null>(null);
  const handleLogin = (e:HTMLFormEvent) => {
    e.preventDefault();
    let token= 'test-token-user';
    if(userRef.current?.value=='admin'){
      token="test-token-admin";
    }
    setToken(token);
    navigate("/", { replace: true });
  };


  return <>
    <div>
    <form onSubmit={handleLogin} >
       
       Login:
        <div className='flex'>
          <label htmlFor={userId}>User Name</label>
          <input type='text' id={userId} ref={userRef} placeholder='admin / user' required /> 
          </div>
        <div className='flex'>
          <label htmlFor={pwdId}>Password</label> 
          <input type='text' id={pwdId} placeholder='qwerty123' required minLength={3}/>
        </div>
       <input type='submit' value='submit'/>
    </form>
    </div>
     </>;
};

export default Login;