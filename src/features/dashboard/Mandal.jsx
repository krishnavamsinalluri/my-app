import { retry } from "@reduxjs/toolkit/query"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Mandal(){
    var user=useParams()
    console.log(user)
    var [problems,setProblems]=useState()
    useEffect(()=>{
            axios({
                method:'get',
                url: 'http://localhost:4000/problem' 
            }).then((res)=>{

                setProblems(res.data)
            })
    },[])
        function dele(i){
            var tem=problems.splice(i,1)
            setProblems([...tem])
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
              <th>Solve</th>

                </thead>
                <tbody>
                {
                    problems && problems.map((is)=>{
                        if(problems.mandalId== user.id){
                            return (
                                <tr>
                         <td> { is.issue}</td>
                          <td>{is.name}</td>
                          <td>{is.mandalname}</td>
                          <td>{is.villagename}</td>
                          <td>{is.phonenumber}</td>
                          <td> <i class="bi bi-check-circle-fill"  onClick={()=>{dele(is.i)}}>Done</i></td>  

                                </tr>
                            )
                        }
                    })
                }

                </tbody>
   
            </table>
       </div>
    )
}
export default Mandal