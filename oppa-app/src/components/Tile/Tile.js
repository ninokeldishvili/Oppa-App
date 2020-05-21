import React from 'react'
import './Tile.css'

const Tile = (props) =>{
    return (
        <div className="col-6">
            <div className="tile">
               <div className="section-name"> {props.name} </div>
            </div>
        </div>
    )

} 

export default Tile