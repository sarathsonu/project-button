import Head from './headtext'
// import Shape from './shape'
// import Effect from './effect'
import Buttons from './Buttons'
import Color from './color'
import Next from './next'
import { useState } from 'react'


export default function Center() {
  
  return (
 <>
    <div className='body'>
    <Head/>
    <div className='Center'>
      <Buttons/>
    {/* <Shape/>
    <Effect/> */}
    <Color/>
    
    </div>
    <Next/>
    </div>

    </>   
  )
}