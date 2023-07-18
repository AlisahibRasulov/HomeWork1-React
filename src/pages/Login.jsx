import React, { useState } from "react";
// import Register from './Register';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = ({setUser}) => {
  const navigate = useNavigate();
  // let dataUser = JSON.parse(sessionStorage.getItem("registerData"));
    const { REACT_APP_BASE_URL } = process.env;
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
 
   const dataUser = JSON.parse(sessionStorage.getItem("registerData"));
  
    const onHandleChangeLogin = (e) => {
        setLoginData({...loginData, [e.target.name]:e.target.value});
       };
    const login = () =>{
      let loginData;
        axios.post(`${REACT_APP_BASE_URL}/login`,loginData).then((res) => {
            console.log(res);
            if(res.status == 201){
              navigate("/home");
              setUser(true);
              // dataUser();
              JSON.parse(sessionStorage.getItem("registerData"))
            }
            // JSON.parse(sessionStorage.getItem("registerData"))
            else if(res.status == 401){
              navigate("/");
              setUser(false);
              sessionStorage.removeItem("registerData");
            };
          });
    //        if (dataUser) {
    //           loginData = dataUser;
    //         } else {
    //           loginData = [];
    //         }
    }
    // const backPage = () => {
    //   navigate("/");
    //   setUser(false);
    //   sessionStorage.removeItem("registerData");
    // };
  return (
    <div>
        <input type="text" name="email" placeholder='Email' onChange={onHandleChangeLogin}/>
        <input type="password" name="password" placeholder='Password' onChange={onHandleChangeLogin}/>
        <button onClick={login} >Login</button>
        <button onClick={backPage}>Back</button>
    </div>
  )
}

export default Login