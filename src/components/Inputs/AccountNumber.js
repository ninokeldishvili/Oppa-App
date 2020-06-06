import React from 'react'

const AccountNumber = ({ onChange, accountNumber }) => {
    return (
        <div className="row">
            <label className="col-lg-6 col-sm-12">Account Number:</label>
            <input className="col-lg-6 col-sm-12 inputBox" type="text" value={accountNumber} onChange={onChange} maxLength="22" placeholder="GE00XX0000000000000000" />
        </div>
    )
}
export default AccountNumber