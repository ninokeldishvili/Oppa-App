import React from 'react'
import MobileNumber from './../Inputs/MobileNumber'
import Amount from './../Inputs/Amount'

class Mobile extends React.Component{
constructor(props){
  super(props);
  this.state = {
    number: '', 
    amount: '',
    comission: 0,
    mobileRegex: /^5[0-9]*$/,
    amountRegex:  /^[0-9.]*$/,
    error: 'incorrect amount',
  }
}

onHandleNumberChange = e =>{
  let number = e.target.value;
  if(number === '' || new RegExp(this.state.mobileRegex).test(number)){
      this.setState({
         number
      })
  }
}

onHandleAmountChange = e =>{
  let am = e.target.value;
  if(am === '' || new RegExp(this.state.amountRegex).test(am)){
    this.setState({
      amount: am,
      comission: am*0.01
  })
  }

}
  render(){
    const {number, amount, comission, error} = this.state;
     return (
        <div className="col-6">
          <MobileNumber onChange={this.onHandleNumberChange} number={number}/>
          <Amount onChange={this.onHandleAmountChange} amount={amount} comission={comission} error={error}/>
          <button>Fill</button>
        </div>
    )
  }
} 

export default Mobile