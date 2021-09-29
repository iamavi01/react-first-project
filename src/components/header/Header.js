import React from 'react';
import "./header.css";
import Typed from "react-typed";


function Header(){
    const poopup=()=>{
        document.getElementById("sendmessagebutton").style.zIndex = "10";
    }
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
            <button onClick={poopup}  className="contact-btn">Send Message</button>
        </div>
        </section>
        </>

    )
}
export default Header;