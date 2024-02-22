import React from 'react'
import { menData } from '../Data/men'
      const fristimage=  menData.slice(0,5)
function Men() {
  return (
    <div className='Tittle'>
    <h2>Mens</h2>

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

export default Men