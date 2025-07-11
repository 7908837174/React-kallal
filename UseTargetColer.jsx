import { useState } from "react";
import "./Style.css";

const UseTargetColer = () =>{
    const [backgroundColor , setBackgroundColor] = useState("Green");
    const [textColor , settextColor] = useState("#1b1b1b");
    const [ buttonStyle , setButtonStyle ] = useState("Green");

    const hendleClick = () =>{
         setBackgroundColor (backgroundColor = "green" ?  "#1b1b1b" : "green");
         settextColor(textColor = '#1b1b1b' ? "#ffa31a" : "#1b1b1b" );
         setButtonStyle(backgroundColor = "white" ? "#1b1b1b" : "white");
    }

    return <div style={{background , color : textColor}}> 
    <button onClick={ handleClick} style={{buttonStyle , color: textColor , border : `2px solid ${textColor}`}}>
       {backgroundColor = '1b1b1b' ? "Black Theme" : "white Theme"}
    </button>
    <section className="content">
        <h1>Welcome To A <br />
        Real world... </h1>
         </section>
    </div>
}