import { useState } from "react";
import "../Style.css";

const Accordin = ({title , content}) =>{
    const [isActive, setIsActive] = useState(false);

    return <section className=" accordion-card" key={Math.random()}>
        <div className="header" onClick={ () => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className=" icon"> {isActive? '-':'+'}</p>
        </div>

        <div className="content">
        {isActive && <p className="card_info">{content}</p>}
        </div>
    </section>
 }
 