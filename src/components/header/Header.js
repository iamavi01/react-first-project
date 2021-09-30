import React from 'react';
import "./header.css";
import { useState } from 'react'
import Typed from "react-typed";
import Contact from '../NavBar/contact/Contact';



function Header(){
   
    const [triggerPopUp,setTriggerPopup]=useState(false) 
       return(
               <>
        
        <section className="header">
<div>
        <h1 className="tittle">
            Helow Avi here 
        </h1>
        </div>
        <div>
        <Typed 
        className="typed-text"
        strings={["need website?","want your app created?","want your logo?"]}
        loop
        typeSpeed={40}
        backSpeed={60}
        />
        </div>
        <div >
            <button onClick={()=>setTriggerPopup(!triggerPopUp)}  className="contact-btn">Send Message</button>
        </div>
        </section>
          
<Contact target={triggerPopUp} setClose={setTriggerPopup}>
  </Contact>
        </>
        

    )
}
export default Header;