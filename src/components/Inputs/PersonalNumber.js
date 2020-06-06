import React from 'react'

const PersonalNumber = ({ onChange, personalNumber }) => {
    return (
        <div className="row">
            <label className="col-lg-6 col-sm-12">Personal Number:</label>
            <input className="col-lg-6 col-sm-12 inputBox" type="text" value={personalNumber} onChange={onChange} maxLength="11" />
        </div>
    )
}
export default PersonalNumber