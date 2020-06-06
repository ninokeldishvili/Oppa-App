import React from 'react'

const MobileNumber = ({ onChange, number }) => {
    return (
        <div className="row">
            <label className="col-lg-6 col-sm-12">Mobile Number:</label>
            <input className="col-lg-6 col-sm-12 inputBox" type="text" value={number} onChange={onChange} maxLength="9" />
        </div>
    )

}
export default MobileNumber