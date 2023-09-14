import React from "react";
import Navbar from "./Component/Navbar";
import ImageContainer from "./Component/ImageContainer";
import Section1 from "./Component/Section1";
import AboutSection from "./Component/AboutSection";
import ContactMe from "./Component/ContactMe";
import Location from "./Component/Location";
import Copyright from "./Component/Copyright";
const App=()=>{
    return(
      <div>
        <Navbar />
        <ImageContainer />
         <Section1 />
         <AboutSection />
         <ContactMe />
         <Location />
         <Copyright />
      </div>

    )
}
export default App;