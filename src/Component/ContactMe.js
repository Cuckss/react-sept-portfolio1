import React from "react";

const ContactMe=()=>{
    return(
        <div className="contactme-div">
         <h1>CONTACT ME</h1>
        <input type="text" placeholder="Full Name"></input>
        <input type="email" placeholder="Email Address"></input>
        <input type="number" placeholder="Phone Number"></input>
        <input type="text" placeholder="Message"></input>
        <button>Send</button>
        </div>
       
    )
}
export default ContactMe;