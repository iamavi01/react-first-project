import React from "react";
import "./app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar/navbar"
import Header from "./components/header/Header";
import Particles from "react-particles-js";
import Contact from "./components/NavBar/contact/Contact";





function App(){
  return(
    <>
    
 
   <NavBar />
   <Header />

   
<Contact/>
   
  </> 
  )
}
export default App