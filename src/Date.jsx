import React from 'react'

function Date() {
    var showdate=new Date();
    var displaydate=showdate.getDate()
    var dt=showdate.toDateString()

  return (
    <div>
        <center>

            {displaydate}
            {dt}
        </center>

    </div>
  )
}

export default Date