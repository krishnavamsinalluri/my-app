import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByIdQuery, useUpdateproductMutation } from '../servers/product'
import { useFormik } from 'formik'

function Editproduct() {
    var {pid}=useParams()
    var {data}=useGetProductsByIdQuery(pid)
    var [fn]=useUpdateproductMutation()
  var product=  useFormik({
    initialValues: { title: "", price: "", description: "", category: "", image: "" },
    onSubmit:(values)=>{
        fn(values).then((res)=>{
            alert("update")
        })
    }

    })
    useEffect(() => {
        if(data){
            product.setValues(data)
            console.log(data)
        }
    }, )
    
  return (
    <div>
        <form onSubmit={product.handleSubmit}>
            <input type="text" name='title' value={product.values?.title} onChange={product.handleChange} />
            <input type="text" name='price' value={product.values?.price} onChange={product.handleChange} />
            <input type="text" name='description' value={product.values?.description} onChange={product.handleChange} />
            <input type="text" name='category' value={product.values?.category} onChange={product.handleChange} />
            <input type="text" name='image' value={product.values?.image} onChange={product.handleChange} />
            <button>update</button>
        </form>
    </div>
  )
}

export default Editproduct