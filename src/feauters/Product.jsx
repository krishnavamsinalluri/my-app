import { useGetAllProductsByNameQuery } from "../servers/product"

function Products(){
   var {data} =useGetAllProductsByNameQuery()


    return(
        <div >
           

        

          <div className="products">
        <ul className="d-flex flex-wrap">
        {
           data && data.map((b)=>{
                return (
                    <li className="card w-50px m-3 p-3">
                        {b.title}
                    <img style={{width:"100px"}} src={b.image} alt="" />
                    <br />
                    <b>${b.price}</b>
                    
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