import React from 'react'
import { mobileData } from '../Data/mobiles'
import { useParams } from 'react-router-dom'
function Mobliessingles() {
      const id= useParams()
        const products=mobileData.find(function(iteam){
            return(iteam.id===id)
        })
        console.log(id)
  return (
    <div>
        <div className='d-flex'>
            <img width="50%"  src={products.image} alt="" />
            <div className='m-4 p-6' >
                <h3>{products.model}</h3>
                <h2>{products.price}</h2>
                <p > {products.description}</p>
                <button type="button" class="btn btn-warning">Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export default Mobliessingles