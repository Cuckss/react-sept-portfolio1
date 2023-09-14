import React from "react";
import image1 from "../Images/image1.png"
import image2 from "../Images/image2.png"
import image3 from "../Images/image3.png"
import image4 from "../Images/image4.png"
import image5 from "../Images/image5.png"
import image6 from "../Images/image6.png"
const Section1=()=>{
    return(
        <div className="section1-div">
            <h1>PORTFOLIO</h1>
            <div id="images-inside">
            <img src={image1}/>
             <img src={image2}/>
             <img src={image3}/>
             <img src={image4}/>
             <img src={image5}/>
             <img src={image6}/>
            </div>
             
        </div>
    )
}
export default Section1 ;

// import * as ALL from "../assets/png/icons";

//  const itemsToRender = [];
//  for (let x in ALL) {
//   console.log(x);
//   itemsToRender.push(
//     <div key={x} className="image-gallery-item">
//      <img src={ALL[x]}></img>
//     </div>
//   );
//  }

// function ImageGallery() {
//     return (
//       <>
//        <div className="image-gallery">{itemsToRender}</div>
//       </>
//      );
//     }
   
//     export default ImageGallery;