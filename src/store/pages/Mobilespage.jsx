import React, { useState } from 'react';
import { mobileData } from '../Data/mobiles';
import { Link } from 'react-router-dom';

function Mobilespage() {
    const [selectProduct, setSelectProduct] = useState([]);

    function companyHandler(company) {
        if (selectProduct.includes(company)) {
            setSelectProduct(selectProduct.filter(item => item !== company));
        } else {
            setSelectProduct([...selectProduct, company]);
        }
    }

    const filteredProducts = selectProduct.length === 0 ?
        mobileData :
        mobileData.filter(item => selectProduct.includes(item.company));

    return (
        <>
            <div className='fullpage'>
                <div className='select' >
                    {mobileData.map(phone => (
                        <div className='m-6' key={phone.company}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectProduct.includes(phone.company)}
                                    onChange={() => companyHandler(phone.company)}
                                />
                                {phone.company}
                                    </label>
                        </div>
                    ))}
                </div>

                <div className='pagesection '>
                    {filteredProducts.map(item => (
                        <div className='card w-4 m-4 p-6' key={item.id}>
                            <Link to={`/moblies/${item.id}`}>
                                <img width="100%" src={item.image} alt={item.model} />
                            </Link>
                            <b>{item.company}, {item.model}</b>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Mobilespage;
