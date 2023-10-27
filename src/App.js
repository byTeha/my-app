
import React,{useState,useEffect} from "react";
import './styles/App.css';
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppPouter from "./components/AppPouter";
import { AuthContext } from "./context";

function App(){
  const [isAuth,setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
   if (localStorage.getItem('auth')){
    setIsAuth(true)
   }
   setLoading(false)
  },[])
  return ( 

    <AuthContext.Provider value={{isAuth, setIsAuth,isLoading}}>
          <BrowserRouter> 
               <Navbar/>
               <AppPouter/> 
           </BrowserRouter>
    </AuthContext.Provider>
  
  )
}

export default App;
