import React from 'react'

const Comission = ({ comission }) => {
    return (
        <div className="row">
            <label className="col-lg-6 col-sm-12">Comission:</label>
            <div className="col-lg-6 col-sm-12">{comission}</div>
        </div>
    )
}

export default Comission