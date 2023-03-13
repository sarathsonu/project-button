import { useState } from 'react'


function Color() {
  const [color,setColor]= useState();  
  const [color1,setColor1]= useState();
  const [color2,setColor2]= useState();
  return (
    <div class="thirdbox">
    <h1 class="Color">Color</h1>
    <div class="Colorbox">
        <div class="what">
            <label class="lab_button">Button</label>
            <input type="text" className='colorText white' value={color}/>
        <div class="color-picker">
        <input type="color"  className="colorpicker2" id="color_1"  onChange={(e) =>setColor(e.target.value)}  />
        </div>
        </div>

        <div class="what1">
            <label class="lab_Text">Text</label>
            <input type="text" className='colorText black' value={color1}/>
        <div class="color-picker">
        <input type="color"  className="colorpicker2" id="color_1"  onChange={(e) =>setColor1(e.target.value)}  />
        </div>
        </div>

        <div class="what2">
            <label class="lab_Shadow">Shadow</label>
            <input type="text" className='colorText blue' value={color2}/>
        <div class="color-picker">
          <input type="color" name="color" class="colorpicker" id="color_1" onChange={(e) =>setColor2(e.target.value)}  />
        </div>
        </div>

</div>
</div>

  )
}
export default Color;