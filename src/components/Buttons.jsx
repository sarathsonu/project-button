import React, {useState} from "react";

const Buttons=()=>{
    const [style, setStyle] =useState("Border");
    const [style2, setStyle2]= useState("Shadow");
    const [style3, setStyle3]= useState("Highlight");

    const changeStyle =()=>{
        console.log("you just clicked first button");
        setStyle("onchange1")
        setStyle2("onchange1-2")
        setStyle3("onchange1-3")
    };
    const changeStyle2 =()=>{
        console.log("you just clicked first button");
        setStyle("onchange2")
        setStyle2("onchange2-2")
        setStyle3("onchange2-3")
    };
    const changeStyle3 =()=>{
        console.log("you just clicked first button");
        setStyle("onchange3");
        setStyle2("onchange3-2");
        setStyle3("onchange3-3");
    };
    return(
        <>
        <div className="firstbox">
            <h1 className="shape">Shape</h1>
        <div className="followbox">
            <button className="follow1" onClick={changeStyle}>Follow</button>
            <button className="follow2" onClick={changeStyle2}>Follow</button>
            <button className="follow3"onClick={changeStyle3}>Follow</button>
        </div>
        </div>
        <div className='secondtbox'>
            <h1 className='Effect'>Effect</h1>
     
            <button className={style}>Border</button>
            <button className={style2}>Shadow</button>
            <button className={style3}>Highlight</button>
        </div>
       
        </>
    )
}
export default Buttons;