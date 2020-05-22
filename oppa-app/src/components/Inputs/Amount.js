import React from 'react'

class Amount extends React.Component{
    constructor (props){
        super(props);
        this.state={
            amount: '', 
            regex: /^[0-9.]*$/,
            error: 'incorrect amount',
            comission: 0,
        }
        this.onHandleAmountChange = this.onHandleAmountChange.bind(this);
    }

    onHandleAmountChange = e =>{
        let amount = e.target.value;
        if(amount === '' || new RegExp(this.state.regex).test(amount)){
            let com = amount*0.01
            this.setState({
                amount,
                comission: com > 0.5 ? com : 0.5,
            })

        }

    }
    
    render(){
        const {amount,error, comission} = this.state
        return(
        <div>
            Amount: <input type="text" value={amount} onChange={this.onHandleAmountChange}/>
           <div>{(amount && (amount>100 || amount<1 )) && error }</div> 
        <div>{comission}</div>
        </div>
    )
    }
   
}
export default Amount