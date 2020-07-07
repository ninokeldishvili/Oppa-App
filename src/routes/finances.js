import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import ComissionRow from "../components/ComissionRow";
import ErrorMessage from "../components/ErrorMessage";
import axios from 'axios';

class Finances extends React.Component {
  state = {
    mobile_number: "",
    amount: "",
    id_number: "",
    account_number: "", // GE66CL6666666666666666
    comission: 0
  };

  handleNumberChange = e => {
    let mobile_number = e.target.value;
    const mobileRegex = /^5[0-9]*$/;
    if (mobile_number === "" || new RegExp(mobileRegex).test(mobile_number)) {
      this.setState({ mobile_number });
    }
  };

  handleid_numberChange = e => {
    let id_number = e.target.value;
    const id_numberRegex = /^[0-9]*$/;
    if (
      id_number === "" ||
      new RegExp(id_numberRegex).test(id_number)
    ) {
      this.setState({ id_number });
    }
  };

  handleaccount_numberChange = e => {
    let account_number = e.target.value;
    this.setState({ account_number });
  };

  handleAmountChange = e => {
    let am = e.target.value;
    const amountRegex = /^[0-9.]*$/;
    if (am === "" || new RegExp(amountRegex).test(am)) {
      let com = am * 0.01;
      this.setState({
        amount: am,
        comission: com > 0.5 ? com : 0.5
      });
    }
  };

  disableButton = () => {
    const { mobile_number, amount, id_number } = this.state;
    return !(
      mobile_number.length === 9 &&
      id_number.length === 11 &&
      !(amount > 100 || amount < 1) &&
      this.validateaccount_number()
    );
  };

  onSubmit = () => {

    const { account_number, mobile_number, amount, comission, id_number } = this.state;

    let payUtility = {
      account_number,
      id_number,
      mobile_number,
      amount, 
      comission, 
    }

    axios.post('http://localhost:4000/pay-finances', payUtility)
         .then(res=> console.log(res.data))

    alert(`Your Balance is filled with ${amount - comission} GEL, Thank You!`);

    this.setState({
      account_number: '',
      id_number: '',
      mobile_number: '',
      amount: '', 
      comission: 0, 
    })

   
  };

  validateaccount_number = () => {
    const account_numberRegex = /^GE[0-9]{2}[A-Z]{2}[0-9]{16}$/;
    return new RegExp(account_numberRegex).test(this.state.account_number);
  };

  render() {
    const {
      mobile_number,
      amount,
      comission,
      id_number,
      account_number
    } = this.state;

    return (
      <div className="form-container mx-auto col-lg-7">
        <Input
          value={account_number}
          onChange={this.handleaccount_numberChange}
          label="Acc. Number"
          title="Account Number"
          maxLength="22"
          placeholder="GE00XX0000000000000000"
        />
        <Input
          value={id_number}
          onChange={this.handleid_numberChange}
          label="ID Number"
          maxLength="11"
        />
        <Input
          value={mobile_number}
          onChange={this.handleNumberChange}
          label="Mobile Number"
          maxLength="9"
        />
        <Input
          value={amount}
          onChange={this.handleAmountChange}
          label="Amount"
        />
        <ComissionRow value={comission} />
        <Button
          isDisabled={this.disableButton()}
          onClick={this.onSubmit}
          children="Fill Balance"
        />
        {amount && (amount > 100 || amount < 1) && (
          <ErrorMessage>*incorrect amount</ErrorMessage>
        )}
      </div>
    );
  }
}
export default Finances;
