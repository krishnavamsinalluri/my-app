import React from "react"
import { useFormik } from "formik"
import { useAddNewuserMutation } from "../../servies/user"
function Register(){

var [fn]=useAddNewuserMutation()
var newuser= useFormik({
    initialValues:{
        "username":"","password":"","role":""
    },
    onSubmit:(values)=>{
        fn(values)
    }
})

    return(
        <div>
            <form onSubmit={newuser.handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={newuser.handleChange}/> <br />
                <input type="text" name="password" placeholder="Password" onChange={newuser.handleChange}/> <br />
                <input type="text" name="role" placeholder="Role" onChange={newuser.handleChange}/> <br />
                <button>Sigin</button>

            </form>
        </div>
    )
}
export default Register