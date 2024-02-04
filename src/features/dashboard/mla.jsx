import { useGetAllproblemsQuery } from "../../servers/problem"

function Mla(){
    var {data}=useGetAllproblemsQuery()
    console.log("m"+data)
    return(
        <div>
        <ul className="d-flex flex-wrap">
            
        {
                data && data.map((a)=>{
                    return <li className="card w-3 m-3 p-3">
                           <b>{a.name}</b>
                            <b>{a.mandalname}</b>
                            <b>{a.villagename}</b>
                            <iframe style={{width:"100px"}} title="url" src={a.file} ></iframe>


                    </li>
                        
                        
                
                })
            }
        </ul>
        </div>
    )
}
export default Mla