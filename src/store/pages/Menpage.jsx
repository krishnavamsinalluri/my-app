import React from 'react'
import { menData } from '../Data/men'
import { Link } from 'react-router-dom'
function Menpage() {
  return (
    <div>
                  <div>
        <div className='pagesection'>
        {
            menData.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/men/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
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

export default Menpage