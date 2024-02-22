import React from 'react'
import { speakerData } from '../Data/speaker'
    const fristimage=  speakerData.slice(0,5)
function Speaker() {
  return (
    <div className='Tittle'>    
  <h2>Speakers</h2>

<div className='display'>
{
  fristimage.map((iteam)=>{
    return (
      <div className="imagebox">
          <img className='image' src={iteam.image} alt="" />

    </div>
    )
  })
}
</div>
</div>
  )
}

export default Speaker