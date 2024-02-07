import { useState } from "react"
import { useGetAllproblemsQuery, useUpdateProdlemMutation,  } from "../../servers/problem"
import { useGetAllMandalQuery } from "../../servers/user"
import { Alert } from "bootstrap"

function Mla(){
    var {isLoading,data}=useGetAllproblemsQuery()
    var{isLoading:mandalLoading,data:Mandaldata} = useGetAllMandalQuery()
      var [updf]=  useUpdateProdlemMutation()
  var [selectmadalId,setSelectmadalId]=useState(null)
        function asignIssu(emp){
          var updated={...emp,mandalId:selectmadalId}
          updf((updated))
        }
    return(
        <div className="container">
          <table className="table table-stripped table-border">
            <thead>
              <th>Issue</th>
              <th>Name of Sarpach</th>
              <th>Name of Mandal</th>
              <th>Name of Village</th>
              <th>Phone number</th>
              <th>Selection</th>
              <th>Action</th>
            </thead>
              <tbody>
              {
                !isLoading && !mandalLoading && data.map((a)=>{
                    return (<tr >
                          
                          <td> { a.issue}</td>
                          <td>{a.name}</td>
                          <td>{a.mandalname}</td>
                          <td>{a.villagename}</td>
                          <td>{a.phonenumber}</td>
                          <td>
                          <select onChange={(e)=>{setSelectmadalId(e.target.value)}}>
                              <option  value="null" disabled selected>Please Select Cadiant</option>
                              {
                                Mandaldata.map((b)=>{
                                  return (
                                    <option value={b.id} selected={+ a.mandalId===b.id}>
                                      {b.username}
                                    </option>
                                  )
                                })
                              }
                            </select>
 
                          </td>
                            <td> <button onClick={()=>{asignIssu(a)}}>Assign</button></td>  
                    </tr>)
                })
            }
  
              </tbody>
          </table>
            
      
        </div>
    )
}
export default Mla