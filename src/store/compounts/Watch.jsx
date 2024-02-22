import React from 'react'
import { watchData } from '../Data/watch'
  const fristimage= watchData.slice(0,5)
function Watch() {
  return (
    <div className='Tittle'>
    <h2>Watchs</h2>
<div className='display'>
{
    fristimage.map((iteam)=>{
        return(
            <div className='imagebox' >
                <img className='image' src={iteam.image} alt="" />
            </div>
        )
    })
}

</div>

    </div>
  )
}

export default Watch