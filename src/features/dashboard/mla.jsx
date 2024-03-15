import { useState } from "react"
import { useDeleteproblemMutation, useGetAllproblemsQuery, useLazyGetAllproblemsQuery, useUpdateProdlemMutation,  } from "../../servers/problem"
import { useGetAllMandalQuery } from "../../servers/user"

function Mla(){
    var {isLoading,data}=useGetAllproblemsQuery()
    console.log(data)
    var [rfud]=useLazyGetAllproblemsQuery()
    var{isLoading:mandalLoading,data:Mandaldata} = useGetAllMandalQuery()
      var [updf]=  useUpdateProdlemMutation()
      var[defu]=useDeleteproblemMutation()
  var [selectmadalId,setSelectmadalId]=useState(null)

        function asignIssu(emp){
          var updated={...emp,mandalId:selectmadalId}
          updf((updated))
        }
        function dele(id){
          defu(id).then((res)=>{
            rfud()
          })
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
              <th>Solve</th>
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
                                    <option value={b.id} selected={console.log("id"+ a.mandalId===b.id)}>
                                      {b.username}
                                    </option>
                                  )
                                })
                              }
                            </select>
                          </td>
                            <td> <b className="btn btn-outline-dark"  onClick={()=>{asignIssu(a)}}>Assign</b></td>
                           <td> <i class="bi bi-check-circle-fill"  onClick={()=>{dele(a.id)}}>Done</i></td>  
                    </tr>)
                })
            }
  
              </tbody>
          </table>
            
      
        </div>
    )
}
export default Mla