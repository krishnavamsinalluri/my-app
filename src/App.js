import { Outlet } from "react-router-dom"

function App(){

    return(
        <div className="card">
            <Outlet></Outlet>
        </div>
    )

}
export default App