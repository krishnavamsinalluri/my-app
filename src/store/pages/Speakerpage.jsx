import React from 'react'
import { speakerData } from '../Data/speaker'
import { Link } from 'react-router-dom'
function Speakerpage() {
  return (
    <div>
         <div>
        <div className='pagesection'>
        {
            speakerData.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/speaker/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
                        <b>{iteams.model},                        {iteams.id}</b>
                    </div>
                )
            })
        }
        </div>
    </div>
    </div>
    
  )
}

export default Speakerpage