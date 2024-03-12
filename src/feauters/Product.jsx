import { useNavigate } from "react-router-dom"
import { useGetAllProductsByNameQuery } from "../servers/product"

function Products(){
   var navi= useNavigate()
   var {data} =useGetAllProductsByNameQuery()
function abc(id){
        navi(`/editproduct/${id}`)
}

    return(
        <div >

          <div className="products">
        <ul className="d-flex flex-wrap ">
        {
           data && data.map((b)=>{
                return (
                    <li className="card  m-3 p-3">
                        {b.title}
                    <img style={{width:"100px"}} src={b.image} alt="" />
                    <br />
                    <b>${b.price}</b>
                    <button onClick={()=>{abc(b.id)}}>edit</button>
                    
                    </li>
                )

                    
            
            })
        }
        </ul>
        </div>
   
        </div>
 ) 
}
export default Products