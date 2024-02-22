import React from 'react'
import { womanData } from '../Data/woman'
     const fristimage=   womanData.slice(0,5)
function Women() {
  return (
    <div className='Tittle'>
 <h2>Women</h2>

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

export default Women