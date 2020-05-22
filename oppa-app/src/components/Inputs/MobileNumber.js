import React from 'react'

class MobileNumber extends React.Component{
    constructor (props){
        super(props);
        this.state={
            number: '', 
            regex: /^5[0-9]*$/,
        }
        this.onHandleNumberChange = this.onHandleNumberChange.bind(this);
    }

    onHandleNumberChange = e =>{
        let number = e.target.value;
        if(number === '' || new RegExp(this.state.regex).test(number)){
            this.setState({
               number
            })
        }
    }

    render(){
        const {number} = this.state
        return(
        <div>
            Mobile Number: <input type="text" value={number} onChange={this.onHandleNumberChange} maxLength="9" pattern="[0-9]*"/>
        </div>
    )
    }
   
}
export default MobileNumber