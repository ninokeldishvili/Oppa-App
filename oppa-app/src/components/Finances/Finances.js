import React from 'react'
import MobileNumber from './../Inputs/MobileNumber'
import FillButton from './../FillButton/FillButton'
import Comission from './../Comission/Comission'
import Amount from './../Inputs/Amount'
import PersonalNumber from './../Inputs/PersonalNumber'
import AccountNumber from './../Inputs/AccountNumber'

class Finances extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '',
            amount: '',
            personalNumber: '',
            accountNumber: '',
            comission: 0,
            mobileRegex: /^5[0-9]*$/,
            amountRegex: /^[0-9.]*$/,
            personalNumberRegex: /^[0-9]*$/,
            accountNumberRegex: /^GE[0-9]{2}[A-Z]{2}[0-9]{16}$/,
        }
    }

    onHandleNumberChange = e => {
        let number = e.target.value;
        if (number === '' || new RegExp(this.state.mobileRegex).test(number)) {
            this.setState({
                number
            })
        }
    }

    onHandlePersonalNumberChange = e => {
        let personalNumber = e.target.value;
        if (personalNumber === '' || new RegExp(this.state.personalNumberRegex).test(personalNumber)) {
            this.setState({
                personalNumber
            })
        }
    }

    onHandleAccountNumberChange = e => {
        let accountNumber = e.target.value;
        this.setState({
            accountNumber,
        })
    }

    onHandleAmountChange = e => {
        let am = e.target.value;
        if (am === '' || new RegExp(this.state.amountRegex).test(am)) {
            let com = am * 0.01
            this.setState({
                amount: am,
                comission: com > 0.5 ? com : 0.5,
            })
        }
    }

    disableButton = () => {
        const { number, amount, personalNumber } = this.state;
        return !(number.length === 9 && personalNumber.length === 11 && !(amount > 100 || amount < 1) && this.validateAccountNumber())
    }

    handleClick = () => {
        const { comission, amount } = this.state;
        alert(`Your Balance is filled with ${amount - comission} GEL, Thank You!`);
    }

    validateAccountNumber = e => {
        return new RegExp(this.state.accountNumberRegex).test(this.state.accountNumber)
    }

    render() {
        const { number, amount, comission, personalNumber, accountNumber } = this.state;
        return (
            <div className="form-container">
                <AccountNumber onChange={this.onHandleAccountNumberChange} accountNumber={accountNumber} />
                <PersonalNumber onChange={this.onHandlePersonalNumberChange} personalNumber={personalNumber} />
                <MobileNumber onChange={this.onHandleNumberChange} number={number} />
                <Amount onChange={this.onHandleAmountChange} amount={amount} comission={comission} />
                <div>{(amount && (amount > 100 || amount < 1)) ? 'incorrect amount' : ''}</div>
                <Comission comission={comission} />
                <FillButton disabled={this.disableButton()} onClick={this.handleClick} />
            </div>
        )
    }
}
export default Finances