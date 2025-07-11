import { useState } from "react";
import "./style.css";

const Produuct = () =>{
    const [currentIndex , setCurrentIndex]  = useState(0);
    const testimonials =[ 

    ];

    return <div className="testimonials">
       <div className=" testimonials">
        {testimonials[currentIndex].quote}
       </div>

       <div className="tastimonals-author"> 
        -{testimonials[currentIndex].author}
       </div>
    </div>
}

export default Produuct;