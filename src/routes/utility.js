import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Comission from "../components/ComissionRow";
import ErrorMessage from "../components/ErrorMessage";

class Utility extends React.Component {
  state = {
    number: "",
    amount: "",
    personalNumber: "",
    comission: 0
  };

  handleNumberChange = e => {
    let number = e.target.value;
    const mobileRegex = /^5[0-9]*$/;
    if (number === "" || new RegExp(mobileRegex).test(number)) {
      this.setState({ number });
    }
  };

  handlePersonalNumberChange = e => {
    let personalNumber = e.target.value;
    const personalNumberRegex = /^[0-9]*$/;
    if (
      personalNumber === "" ||
      new RegExp(personalNumberRegex).test(personalNumber)
    ) {
      this.setState({ personalNumber });
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
    const { number, amount, personalNumber } = this.state;
    return !(
      number.length === 9 &&
      personalNumber.length === 11 &&
      !(amount > 100 || amount < 1)
    );
  };

  handleClick = () => {
    const { comission, amount } = this.state;
    alert(`Your Balance is filled with ${amount - comission} GEL, Thank You!`);
  };

  render() {
    const { number, amount, comission, personalNumber } = this.state;

    return (
      <div className="form-container mx-auto col-lg-7">
        <Input
          value={personalNumber}
          onChange={this.handlePersonalNumberChange}
          label="ID Number"
          maxLength="11"
        />
        <Input
          value={number}
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
          onClick={this.handleClick}
        />
        {amount && (amount > 100 || amount < 1) && (
          <ErrorMessage>*incorrect amount</ErrorMessage>
        )}
      </div>
    );
  }
}

export default Utility;
