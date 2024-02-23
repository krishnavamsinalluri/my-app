import React from 'react'
import { watchData } from '../Data/watch'
import { Link } from 'react-router-dom'
function Watchpage() {
  return (
    <div>
         <div>
        <div className='pagesection'>
        {
            watchData.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/watch/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
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

export default Watchpage