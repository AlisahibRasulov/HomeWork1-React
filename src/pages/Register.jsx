import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import avatar from "../image/blank-profile-picture-973460_1280.webp";

const Register = () => {
    const navigate = useNavigate();
    const { REACT_APP_BASE_URL } = process.env;
    const [profileImage,setProfileImage] = useState(null)
    const [registerData, setRegisterData] = useState({
        userId: Date.now(),
        userName: "",
        userSurname:"",
        userEmail:"",
        userPassword:"",
    },[]);
    const onHandleChangeData = (e) => {
        setRegisterData({...registerData, [e.target.name]:e.target.value});
      };

      const convertBase64 = (file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }


    const onHandleChangeImage = async (e) => {
      const file = e.target.files[0]
      const base64= await convertBase64(file)
      setProfileImage(base64)
    }
       const data = {
        userName: registerData.userName,
        userSurname: registerData.userSurname,
        userEmail: registerData.userEmail,
        userPassword: registerData.userPassword,
        userId: registerData.userId,
        userImage: profileImage,
    }
      const register = () =>{
        // console.log(registerData);
        axios.post(`${REACT_APP_BASE_URL}/create-data`,data).then((res) => {
            console.log(res);
            console.log(data.userId)
            
          //   if(res.status == 201){
          //   sessionStorage.setItem("registerData", JSON.stringify(registerData));
          //   navigate("/users");
          //   setUser(true);
          // }else{
          //   alert("Xanalari doldurun")
          // }
        
          });
          navigate("/users");
          console.log(data);
            // setUser(true);
            sessionStorage.setItem("registerData", JSON.stringify(registerData));
              
      }
      const backHomePage = () => {
        navigate("/");
        // setUser(false);
        sessionStorage.removeItem("registerData");
      }
      
  return (
    <div className='register'>
        <h1>Register</h1>
        <div className="register-cart">
        <input type="text" name='userName' onChange={onHandleChangeData}/>
        <input type="text" name='userSurname' onChange={onHandleChangeData}/>
        <input type="text" name ='userEmail' onChange={onHandleChangeData}/>
        <input type="password" name='userPassword' onChange={onHandleChangeData}/>
        <div className="input">
          <input className='input_img'  type="file" onChange={onHandleChangeImage}/>
          <div className="img-border">
            <img className='img-file' src={profileImage == null ? avatar : profileImage}/>
          </div>
        </div>
        <button className='register-btn' onClick={register}>Register</button>
        </div>  
        <button className='back-btn' onClick={backHomePage}>Back Home Page</button>   
    </div>
  )
}

export default Register