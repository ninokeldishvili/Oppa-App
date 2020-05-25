import React from 'react'

const Amount = ({onChange,amount}) => {
        return(
        <div>
            Amount: <input type="text" value={amount} onChange={onChange}/>
        </div>
    )
   
}
export default Amount