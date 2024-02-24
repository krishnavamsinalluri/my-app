import React from 'react'
import { useCart } from './context/Cartcontext'
import { useNavigate } from 'react-router-dom'

function Usercart() {
    var {cartitem,addtoCart}=useCart()
      var navi=  useNavigate()

      function buy(){
        navi("/buynow")
      }
  return (
    <div>
        {cartitem.map((items)=>{
            return(
                
                <div className='cartselection'>
                    <div className='cartimage'>
                        <img src={items.image} alt="" />
                        {console.log(cartitem)}
                    </div>
                    <div className='cartdetailes'>
                        <h2>{items.product}</h2>
                        <h2>{items.company}</h2>
                        <h2>{items.price}</h2>
                        <h3>{items.model}</h3>
                        <button onClick={()=>{buy()}}>Buy Now</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Usercart