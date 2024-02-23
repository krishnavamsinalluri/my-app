import React,{useState} from 'react'
import { speakerData } from '../Data/speaker'
import { Link } from 'react-router-dom'
function Speakerpage() {
    const [selectProduct, setSelectProduct] = useState([]);

    function companyHandler(model) {
        if (selectProduct.includes(model)) {
            setSelectProduct(selectProduct.filter(item => item !== model));
        } else {
            setSelectProduct([...selectProduct, model]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        speakerData :
        speakerData.filter(item => selectProduct.includes(item.model));


  return (
    <div>
         <div className='fullpage'>
         <div className='select' >
                    {speakerData.map(phone => (
                        <div className="pro" key={phone.model}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectProduct.includes(phone.model)}
                                    onChange={() => companyHandler(phone.model)}
                                />
                                {phone.model}
                                    </label>
                        </div>
                    ))}
                </div>

            <div className='pagesection'>
        {
            filteredProducts.map((iteams)=>{
                return(
                    <div className='card w-4 m-4 p-6'>
                        <Link to={`/speaker/${iteams.id}`}>  <img width={"200px"} src={iteams.image} alt="" /></Link>
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

export default Speakerpage