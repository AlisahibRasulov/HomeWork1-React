import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Home from "./pages/Home";
import Users from "./pages/Users";
// import { useState } from "react";



function App() {
// const [user, setUser] = useState(null)
  return (
    <div className="App">
     {/* <Register /> */}
     <Routes>
     {/* <Route  
      path="/register" 
      element={
        user ? <Navigate to="/users"/> : <Register setUser={setUser}/>
      }
      />
       <Route  
      path="/users" 
      element={
        user ?<Users setUser={setUser}/>  :<Navigate to="/register"/> 
      }
      /> */}
     <Route path="/register" element={<Register/>} />
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />

    </Routes>

     
    </div>
  );
}

export default App;
