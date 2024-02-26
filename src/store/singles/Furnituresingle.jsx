import React from 'react'
import { useCart } from '../context/Cartcontext'
import { useParams } from 'react-router-dom'
import { furnitureData } from '../Data/furniture'
import Navbar from '../compounts/Navbar'
function Furnituresingle() {
  var {addtoCart,cartitem}=useCart()

   var {id}= useParams()
   var product= furnitureData.find(function(item){return(item.id===id)})


  return (
    <div>
          <Navbar></Navbar>
            <div className='d-flex'>
            <img width="50%"  src={product.image} alt="" />
            <div className='m-4 p-6' >
                <h3>{product.model}</h3>
                <h2>{product.price}</h2>
                <p > {product.description}</p>
                <button type="button" class="btn btn-warning" onClick={()=>{addtoCart(product)}}>Add to Cart</button>

            </div>
        </div>
    </div>
  )
}

export default Furnituresingle