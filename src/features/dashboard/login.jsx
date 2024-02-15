import { useFormik } from "formik"
import { useLazyGetUsersByNameQuery } from "../../servers/user"
import { useNavigate } from "react-router-dom"

function Login(){
  var navi=  useNavigate()
   var [rfn] =    useLazyGetUsersByNameQuery()
   var login=useFormik({
    initialValues:{
        "username":"",
       "password":"",
    },
    onSubmit:(values)=>{
        rfn(values).then((res)=>{
            console.log(res)
            window.localStorage.setItem("user",JSON.stringify(res.data))
            if(res.data.length===0){
                alert("cheeck details ")
            }
            else{
                navi('/dashbord')
            }
  
        })
        console.log(values)
    }
   })
    return(
        <div >
            <form onSubmit={login.handleSubmit} className="login" >
            <h1 class="bi bi-person-circle"></h1>
            <b className="bi bi-person-fill">:</b>    <input type="text"  placeholder="Username" name="username" onChange={login.handleChange} /><br /><br />
                <b class="bi bi-lock-fill">:</b>    <input type="text" placeholder="password" name="Password" onChange={login.handleChange} /><br /><br />
                
                    <button className="btn btn-outline-dark">Save</button><br />
               
            </form>
        </div>
   )
}
export default Login