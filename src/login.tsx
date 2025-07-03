import { useId, useRef } from "react";
import { useAuth } from "./provider/AuthProvider";

const Login = () => {
  const{ setToken } =  useAuth();
  const pwdId = useId();
  const userId = useId();
  const userRef = useRef<HTMLInputElement | null>(null);
  const handleLogin = (e) => {
    e.preventDefault();
    let token= 'user-test-token';
    if(userRef.current?.value=='admin'){
      token="admin-test-token";
    }
    setToken(token);
  };

  return <>
    <div className="login-container">
    <form onSubmit={handleLogin} >
       
       <h3>Login</h3>
        <div className='flex flex-column'>
          <label htmlFor={userId}>User Name</label>
          <input type='text' id={userId} ref={userRef} placeholder='admin / user' required /> 
          </div>
        <div className='flex flex-column'>
          <label htmlFor={pwdId}>Password</label> 
          <input type='text' id={pwdId} placeholder='qwerty123' required minLength={3}/>
        </div>
       <button type='submit'>Submit</button>
    </form>
    </div>
     </>;
};

export default Login;