import React from 'react'

const Amount = ({ onChange, amount }) => {
    return (
        <div className="row">
            <label className="col-lg-6 col-sm-12">Amount:</label>
            <input className="col-lg-6 col-sm-12 inputBox" type="text" value={amount} onChange={onChange} />
        </div>
    )
}
export default Amount