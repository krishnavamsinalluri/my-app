import { useFormik } from "formik"
import { useLazyGetUsersByNameQuery } from "../../servers/user"

function Login(){
   var [rfn] =    useLazyGetUsersByNameQuery()
   var login=useFormik({
    initialValues:{
        "username":"",
       "password":"",

    },
    onSubmit:(values)=>{
        rfn(values)
        console.log(values)
    }
   })
    return(
        <div>
            <form onSubmit={login.handleSubmit} >
            <b className="bi bi-person-fill">:</b>    <input type="text"  placeholder="Username" name="username" onChange={login.handleChange} /><br /><br />
                <b class="bi bi-lock-fill">:</b>    <input type="text" placeholder="password" name="Password" onChange={login.handleChange} /><br /><br />
                
                    <button className="btn btn-outline-dark">Save</button><br />
               
            </form>
        </div>
   )
}
export default Login()