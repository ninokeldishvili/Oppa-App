import React from 'react'

const AccountNumber = ({ onChange, accountNumber }) => {
    return (
        <div>
            Account Number: <input type="text" value={accountNumber} onChange={onChange} maxLength="22" placeholder="GE00XX0000000000000000"/>
        </div>
    )
}
export default AccountNumber