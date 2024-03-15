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
        
    return(
        <div className="container">
            <table className="table table-stripped table-border">
                <thead>
                <th>Issue</th>
              <th>Name of Sarpach</th>
              <th>Name of Mandal</th>
              <th>Name of Village</th>
              <th>Phone number</th>
                </thead>
                <tbody>
                
                    {problems && problems.map((is, index) => {
                        if (is.mandalId === user.id) {
                            return (
                                <tr key={index}>
                                    <td>{is.issue}</td>
                                    <td>{is.name}</td>
                                    <td>{is.mandalname}</td>
                                    <td>{is.villagename}</td>
                                    <td>{is.phonenumber}</td>
                                </tr>
                            );
                        }
                        // Add a return statement for the case when the condition is not met
                        return null;
                    })}
                

                </tbody>
   
            </table>
       </div>
    )
}
export default Mandal