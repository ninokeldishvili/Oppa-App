import React from 'react'

const Amount = ({onChange,amount,comission, error}) => {
        return(
        <div>
            Amount: <input type="text" value={amount} onChange={onChange}/>
           <div>{(amount && (amount>100 || amount<1 )) && error }</div> 
           <div>Commission {comission}</div>
        </div>
    )
   
}
export default Amount