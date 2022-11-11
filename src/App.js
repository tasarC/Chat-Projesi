import Home from "./pages/Home";
import"./App.css"
import ChatBody from "./components/chatBody/ChatBody";
import React, { useEffect, useState} from "react";
import Topbar from './components/topbar/Topbar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Addfriend from "./components/addfriend/Addfriend";


function App() {
 

 const[kategori, setCategory] = useState([
 ]);
 useEffect(() =>{
   fetch("https://api.shareup.qa/api/v1/users")
   .then(responses =>responses.json())
   .then(data => setCategory(data));
 },[])
 
 console.log(kategori);
  return (
    <div className="App">  
     {/* <Veri/> */}
      <BrowserRouter>
      <Topbar/>
        <Routes>
        <Route path="/veri"  element={<Addfriend users={kategori}/>} /> 
            <Route path="/mesaj" element={<ChatBody/>} /> 
            <Route path="/" element={<Home/>} /> 
            <Route path="/home" element={<Home/>} /> 
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
