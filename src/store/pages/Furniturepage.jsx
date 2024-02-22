import React from 'react'
import { furnitureData } from '../Data/furniture'
import { Link } from 'react-router-dom'

function Furniturepage() {
  return (
    <div>
        
        <div>
            <div>
        <div className='pagesection'>
        {
            furnitureData.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/furn/${iteams.id}`}>  <img src={iteams.image} alt="" /></Link>
                        <b>{iteams.company},{iteams.model}</b>
                    </div>
                )
            })
        }
        </div>
    </div>

    </div>
    </div>
  )
}

export default Furniturepage