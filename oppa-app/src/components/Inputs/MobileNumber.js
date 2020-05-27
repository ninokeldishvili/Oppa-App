import React from 'react'

const MobileNumber = ({onChange,number}) => {
        return(
        <div>
            Mobile Number: <input type="text" value={number} onChange={onChange} maxLength="9"/>
        </div>
    )
   
}
export default MobileNumber