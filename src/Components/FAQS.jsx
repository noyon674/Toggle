import React, { useState } from "react";
import {FaqsData} from './data';
import FAQ from "./FAQ";
import style from './faqs.module.css';

const FAQS = ()=>{
    const [faqs, setFaqs] = useState(FaqsData);
    
    return(
        <div className={style.wallpaper}>
            <h1>FAQs</h1>
            <div className={style.container}>
                {
                    faqs.map(item=> <FAQ key = {item.id} {...item}/>)
                }
            </div>
        </div>
    );
};

export default FAQS;