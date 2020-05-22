import React from 'react'
import './Tile.css'
import history from './../../history';

const Tile = (props) =>{
    return (
        <div className="col-6">
            <div className="tile" onClick={() => history.push(props.goTo)}>
               <div className="section-name"> {props.name} </div>
            </div>
        </div>
    )

} 

export default Tile