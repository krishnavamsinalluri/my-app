import React,{useState} from 'react'
import { watchData } from '../Data/watch'
import { Link } from 'react-router-dom'
function Watchpage() {
    const [selectProduct, setSelectProduct] = useState([]);

    function companyHandler(category) {
        if (selectProduct.includes(category)) {
            setSelectProduct(selectProduct.filter(item => item !== category));
        } else {
            setSelectProduct([...selectProduct,category]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        watchData :
        watchData.filter(item => selectProduct.includes(item.category));


  return (
    <div>
         <div className='fullpage'>

            
            <div className='select' >
                    {watchData.map(phone => (
                        <div className="pro" key={phone.category}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectProduct.includes(phone.category)}
                                    onChange={() => companyHandler(phone.category)}
                                />
                                {phone.category}
                                    </label>
                        </div>
                    ))}
                </div>

        
            <div className='pagesection'>
        {
            filteredProducts.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/watch/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
                        <b>{iteams.model}</b>
                    </div>
                )
            })
        }
        </div>
   

            </div>
    </div>
  )
}

export default Watchpage