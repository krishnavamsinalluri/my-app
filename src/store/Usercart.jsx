import React, { useState } from 'react'
import { useCart } from './context/Cartcontext'
import { useNavigate } from 'react-router-dom'
import Navbar from './compounts/Navbar'

function Usercart() {
    var {cartitem,addtoCart}=useCart()
    var[incer,setIncer]=React.useState(0)
    var[decris,setDecris] = React.useState(0)


      var navi=  useNavigate()

      function buy(){
        navi("/buynow")
      }
    
  return (
    <div>
        <Navbar></Navbar>
        {cartitem.map((items)=>{
            return(
                
                <div className='cartselection'>            
                    
                        <div className='d-flex'>
                        <img width="200px" src={items.image} alt="" />
                        <div className='m-6 p-4'>
                        <h3><b>Product:</b>{items.product}</h3>
                        <h5><b></b>{items.company}</h5>
                        <h6><b>Price:</b>{items.price}</h6>
                        <h6><b>Model:</b>{items.model}</h6> 
                       <b>qulitry</b>: <span onClick={()=>{setIncer(incer+1)}}>+</span>      <b>{incer}</b>
                        <span onClick={()=>{setDecris(decris -0)}}>-</span><b>{decris}</b>
                        <br />


                        <button className="btn btn-success"  onClick={()=>{buy()}}>Buy Now</button>
                        </div>
                    </div>
                    </div>

            
            )
        })}
    </div>
  )
}

export default Usercart