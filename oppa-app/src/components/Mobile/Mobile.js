import React from 'react'
import MobileNumber from './../Inputs/MobileNumber'
import Amount from './../Inputs/Amount'

const Mobile = () =>{
    return (
        <div className="col-6">
          <MobileNumber/>
          <Amount/>
          <button>Fill</button>
        </div>
    )

} 

export default Mobile