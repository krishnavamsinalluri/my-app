import React from 'react'
import { computerData } from '../Data/computers'
import { Link } from 'react-router-dom'
function Computerpage() {
  return (
    <div>
            <div>
        <div className='pagesection'>
        {
            computerData.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
              <Link to={`/computers/${iteams.id}`}>   <img width="100%" src={iteams.image} alt="" /></Link>
                        <b>{iteams.company},{iteams.model}</b>
                    </div>
                )
            })
        }
        </div>
    </div>

    </div>
  )
}

export default Computerpage