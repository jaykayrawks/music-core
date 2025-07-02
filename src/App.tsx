import { useEffect,useState } from 'react';
import './App.css'
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";

// import { Button } from 'mf1/button'; // Importing the Button component from the remote module
// import { Button as Button2 } from 'mf2/button'; // Importing the Button component from the remote module

function App() {
   
return (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
}

export default App
