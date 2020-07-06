import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Comission from "../components/ComissionRow";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";

class Utility extends React.Component {
  state = {
    mobile_number: "",
    amount: "",
    id_number: "",
    comission: 0
  };

  handleNumberChange = e => {
    let mobile_number = e.target.value;
    const mobileRegex = /^5[0-9]*$/;
    if (mobile_number === "" || new RegExp(mobileRegex).test(mobile_number)) {
      this.setState({ mobile_number });
    }
  };

  handlePersonalNumberChange = e => {
    let id_number = e.target.value;
    const id_numberRegex = /^[0-9]*$/;
    if (
      id_number === "" ||
      new RegExp(id_numberRegex).test(id_number)
    ) {
      this.setState({ id_number });
    }
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
      !(amount > 100 || amount < 1)
    );
  };

  onSubmit = () => {
    const { mobile_number, amount, comission, id_number } = this.state;

    let payUtility = {
      id_number,
      mobile_number,
      amount, 
      comission, 
    }

    axios.post('http://localhost:4000/pay-utility', payUtility)
         .then(res=> console.log(res.data))

    alert(`Your Balance is filled with ${amount - comission} GEL, Thank You!`);

    this.setState({
      id_number: '',
      mobile_number: '',
      amount: '', 
      comission: 0, 
    })
  };

  render() {
    const { mobile_number, amount, comission, id_number } = this.state;

    return (
      <div className="form-container mx-auto col-lg-7">
        <Input
          value={id_number}
          onChange={this.handlePersonalNumberChange}
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
        <Comission value={comission} />
        <Button
          children="Fill Balance"
          isDisabled={this.disableButton()}
          onClick={this.onSubmit}
        />
        {amount && (amount > 100 || amount < 1) && (
          <ErrorMessage>*incorrect amount</ErrorMessage>
        )}
      </div>
    );
  }
}

export default Utility;
