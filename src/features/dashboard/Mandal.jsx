import { useGetAllMandalQuery } from "../../servers/user"

function Mandal(){
       var{isLoading,data}= useGetAllMandalQuery()
       console.log(data)
    return(
        <div>
                <h1>Mandal</h1>
        {
            !isLoading && data.map((a)=>{
                return (
                    <div>
                        <h1>{a.issue}</h1>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Mandal