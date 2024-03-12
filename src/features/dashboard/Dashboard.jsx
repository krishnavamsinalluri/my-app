import { useNavigate } from "react-router-dom"
import Mla from "./mla"
import Sarpach from "./sarpach"
import Mandal from "./Mandal"

function Dashboard(){
  var navi=  useNavigate()
    var {usersdetails,role,username} =JSON.parse(window.localStorage.getItem('user'))[0]
        console.log(usersdetails)
        function Log(){
            navi("/")
        }
    return <div>
                 <div>
            <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <h3 className="navbar-brand mb-0 h1 " ><h1 className="bi bi bi-person-circle text-light"> {username}</h1></h3>

                <h1 className="navbar-brand mb-0 h1 " ><h1 className="text-light ">Dashbord of {role}</h1></h1>
                <h3 class="navbar-brand mb-0 h1 " onClick={()=>{Log()}}><b className="text-light">Logout</b></h3>

                </div>
                </nav>
            </div>
            {
                role==="M.L.A" && <Mla></Mla>
            }
            {
                role==="Sarpanch" && <Sarpach></Sarpach>
            }
            {
                role==="Mandalleader" && <Mandal></Mandal>    
                
                }
       
    </div>
}
export default Dashboard