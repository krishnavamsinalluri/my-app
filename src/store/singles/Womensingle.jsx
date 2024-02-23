import React from 'react'
import { womanData } from '../Data/woman'
import { useParams } from 'react-router-dom'

function Womensingle() {
    var {id} =useParams()
    var product=womanData.find(function(item){return (item.id===id)})
  return (
    <div>
                    <div className='d-flex'>
            <img width="50%"  src={product.image} alt="" />
            <div className='m-4 p-6' >
                <h3>{product.model}</h3>
                <h2>{product.price}</h2>
                <p > {product.description}</p>
                <button type="button" class="btn btn-warning">Add to Cart</button>

            </div>
        </div>
    </div>


    
  )
}

export default Womensingle