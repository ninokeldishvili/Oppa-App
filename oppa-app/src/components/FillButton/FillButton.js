import React from 'react'

const FillButton = ({disabled,onClick}) => {
 return (
     <div>
        <button type="button" disabled={disabled} onClick={onClick}>Fill Balance</button>
     </div>
 )
}

export default FillButton