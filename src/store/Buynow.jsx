import { useFormik } from 'formik'
import React from 'react'

function Buynow() {
    
  var detiles=  useFormik({
        initialValues:{"Name":"","PhoneNo":"","Pincode":"","Landmark":""},
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>
        <form action="" onSubmit={detiles.handleSubmit} className='form'>
        Name : <br />
            <input type="text" name='Name' placeholder='Name' onChange={detiles.handleChange} /><br />
        Phone Number : <br />
            <input type="text" name='PhoneNo' placeholder='PhoneNo' onChange={detiles.handleChange} /><br></br>
            Pincode :<br></br>
            <input type="text" name='Pincode' placeholder='Pincode' onChange={detiles.handleChange} /><br />
            Landmark :<br></br>
           <input type="text" name='Landmark' placeholder='Landmark' onChange={detiles.handleChange} /><br />
                <button className="btn btn-success" >Place order</button>
        </form>
    </div>
  )
}

export default Buynow