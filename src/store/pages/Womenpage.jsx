import React from 'react'
import { womanData } from '../Data/woman'
import { Link } from 'react-router-dom'
function Womenpage() {
  return (
    <div>
                 <div>
        <div className='pagesection'>
        {
            womanData.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/women/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
                        <b>{iteams.model}</b>
                    </div>
                )
            })
        }
        </div>
    </div>
    </div>
 
    
  )
}

export default Womenpage