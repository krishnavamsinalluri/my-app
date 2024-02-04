import { useFormik } from "formik"
import { useAddProdlemMutation } from "../../servers/problem"

function Sarpach(){
      var [pro]=  useAddProdlemMutation()
  var problems=  useFormik({
        initialValues:{
            "name":"",
            "issue":"","mandalname":"","villagename":"","phonenumber":'',"file":"",
            "id":JSON.parse(window.localStorage.getItem("user"))[0].id
        },
        onSubmit:(values)=>{
            pro(values)
            alert('Your Problem is Raised ')
        }
    })
    return(
            <div>
            <form onSubmit={problems.handleSubmit} >
            <input type="text" placeholder="Name" value={problems.values.name} name="name" onChange={problems.handleChange} onBlur={problems.handleBlur}/> <br />
            <textarea  placeholder="Issue" value={problems.values.issue} name="issue" onChange={problems.handleChange} onBlur={problems.handleBlur}/> <br />
            <input type="text" placeholder="Mandal Name" value={problems.values.mandalname} name="mandalname" onChange={problems.handleChange} onBlur={problems.handleBlur}/> <br />
            <input type="text" placeholder="Village Name" value={problems.values.villagename} name="villagename" onChange={problems.handleChange} onBlur={problems.handleBlur}/> <br />
            <input type="text" placeholder="Phone Number" value={problems.values.phonenumber} name="phonenumber" onChange={problems.handleChange} onBlur={problems.handleBlur}/> <br />
            <input type="file" placeholder="upload image" title="url" value={problems.values.file} name="file" onChange={problems.handleChange} onBlur={problems.handleBlur}/> <br />
            <button className="btn btn-outline-dark"  >Raise problem</button> 

            </form>
            </div>
    )
}
export default Sarpach