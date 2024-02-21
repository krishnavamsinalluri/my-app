import Customer from "./customer"
import Empoly from "./employ"
import Maner from "./maner"

function Dashbord(){
    var {userdetails,role}=JSON.parse( window.localStorage.getItem("user"))[0]
    console.log(userdetails)
    return (
        <div>
            {
                role=== "manager" &&<Maner></Maner>
            }
            {
                role==="cusmter" &&<Customer></Customer>
            }
            {
                role=== "empolyer"&&<Empoly></Empoly>
            }
        </div>
   )
}
export default Dashbord