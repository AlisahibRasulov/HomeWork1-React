import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import avatar from "../image/blank-profile-picture-973460_1280.webp";
// import { useParams } from 'react-router-dom'


const Users = () => {
  const { REACT_APP_BASE_URL } = process.env;
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(true);
  useEffect(()=>{
    axios(`${REACT_APP_BASE_URL}/get-data`).then((res)=>{
      setUserData(res.data.data)
      // JSON.parse(sessionStorage.getItem("registerData"))
    })
  }, [refresh])
  const deletedItem = (userId) =>{
    // const {id} = useParams()
    axios.delete(`${REACT_APP_BASE_URL}/delete-data/${userId}`).then((res)=>{
      // location.reload();
      setUserData(res.data.data)
      setRefresh(!refresh)
    })
    // console.log(id)
  }
  const logOut = ()=>{
    navigate("/register");
    // setUser(false);
    sessionStorage.removeItem("registerData");
  }

  const backHomePage = () => {
    navigate("/");
    // setUser(false);
    sessionStorage.removeItem("registerData");
  }
  return (
    <div>
      <h1>Users</h1>
      <div className="table-border">
      <table id="customers">
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
        </thead>
        <tbody> 
        {userData.map((item,index)=>(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.userName}</td>
            <td>{item.userSurname}</td>
            <td>{item.userEmail}</td>
            <td>
              <div className="img-border">
              <img className='img-file' src={item.userImage == null ? avatar : item.userImage}/>
              </div>    
            </td>
            <td><button className='delete-btn' onClick={()=>deletedItem(item.userId)}>Delete</button></td> 
          </tr>
        ))} 
        </tbody>
      </table>
      <button className='back-btn' onClick={logOut}>Log out</button>
      <button className='back-btn' onClick={backHomePage}>Back Home Page</button>
      </div>   
    </div>
  )
}

export default Users
