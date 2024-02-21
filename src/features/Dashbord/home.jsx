import { useFormik } from "formik";
import React from "react";
import { useLazyGetusersQuery } from "../../servies/user";
import { useNavigate } from "react-router";
function Home(){
    var[fum]=useLazyGetusersQuery()
   var navi= useNavigate()
 var login=useFormik({
    initialValues:  { "username":"",
    "password":""},
    onSubmit:(values)=>{
        fum(values).then((res)=>{
            window.localStorage.setItem("user",JSON.stringify(res.data))
            if(res.data.length===0){
                alert("please check details")
            }
            else{
                navi("/dashbord")
            }

        })

        
    }

})
    function newi(){
        navi("/register")
    }

    return (
        <div>
            <form action="" onSubmit={login.handleSubmit}>
             UserName:   <input type="text" name="username" placeholder="Username" onChange={login.handleChange} />
                <br />
               Password: <input type="text" name="password" placeholder="Password" onChange={login.handleChange} />
                <button>Login</button><br />
                <button onClick={()=>{newi()}}>New user</button>
            </form>

        </div>
    )
}
export default Home