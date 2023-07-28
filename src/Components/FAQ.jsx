import React, { useState } from "react";
import style from './faq.module.css';

const FAQ = ({id, Title, Desc})=>{
    const [toggle, setToggole] = useState(false);

    const handleBtn = ()=>{
        setToggole(!toggle);
    }
    return(
        <div>
            <div className={id != 5 ? style.container: style.container2}>
                <h3>{Title}</h3>
                <div className={style.btn}><button onClick={handleBtn}>{toggle ? '-': '+'}</button></div>
                {toggle && <p>{Desc}</p>}
            </div>
        </div>
    );
};

export default FAQ;