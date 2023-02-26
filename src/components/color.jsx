import { useState } from 'react'
import ColorPicker from './colorpicker';

function Color() {
  // cost [Colors,setColors]=useState('')
  
  return (
    <div class="thirdbox">
    <h1 class="Color">Color</h1>
    <div class="Colorbox">
        <div class="what">
            <label class="lab_button">Button</label>
            {/* <h2 className='olorText white'>{color}</h2> */}
            <h2 className='colorText white'>#FFFFFF</h2>
        <div class="color-picker">
        <ColorPicker  />

        </div>
        </div>

        <div class="what1">
            <label class="lab_Text">Text</label>
            <h2 className='colorText black'>#000000</h2>
        <div class="color-picker">
        <input type="color"  className="colorpicker2" id="color_1" value=" #000000"  />
        {/* <ColorPicker className="colorpicker"/> */}
        </div>
        </div>

        <div class="what2">
            <label class="lab_Shadow">Shadow</label>
            <h2 className='colorText blue'>#6A1ACF</h2>
        <div class="color-picker">
          <input type="color" name="color" class="colorpicker" id="color_1" value="#6A1ACF"  />
          {/* <ColorPicker value="#6A1ACF"/> */}
        </div>
        </div>

</div>
</div>

  )
}
export default Color;