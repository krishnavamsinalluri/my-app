import React from 'react'
import { mobileData } from '../Data/mobile'
function Mobiles() {
  return (
    <div>
        {
          mobileData.map((iteam)=>{
            return (
              <div>
                {iteam.model}
              </div>
            )
          })
       }
    </div>
  )
}

export default Mobiles