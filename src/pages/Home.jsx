import React from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
 const navigate = useNavigate();
const registerPage = () =>{
  navigate("/register");  
}
const usersPage = () =>{
  navigate("/users"); 
}
  return (
    <div>
      <button className='register-page' onClick={registerPage}>Register Page</button>
      <button className='user-page' onClick={usersPage}>Users Page</button>
    </div>
  )
}

export default Home