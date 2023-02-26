import { useState } from "react";

function ColorPicker(){
    // const [color,setColor]=useState('')
    return(
    <>
        <input type="color" name="color" className="colorpicker1" id="color_1" value="#FFFFFF" onChange={(e)=>setColor(e.target.value)}  />
        {/* <input type="color" name="color" className="colorpicker2" id="color_1" value=" #000000"  />
        <input type="color" name="color" className="colorpicker3" id="color_1" value="#6A1ACF"  /> */}
    </>
    )
}
export default ColorPicker;