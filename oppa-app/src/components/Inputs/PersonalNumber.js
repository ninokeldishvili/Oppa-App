import React from 'react'

const PersonalNumber = ({ onChange, personalNumber }) => {
    return (
        <div>
            PersonalNumber Number: <input type="text" value={personalNumber} onChange={onChange} maxLength="11" />
        </div>
    )
}
export default PersonalNumber