import React from "react";
import MobileNumber from "../components/Inputs/MobileNumber";
import FillButton from "../components/FillButton";
import Comission from "../components/Comission";
import Amount from "../components/Inputs/Amount";
import PersonalNumber from "../components/Inputs/PersonalNumber";

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
      <div className="form-container mx-auto col-lg-6 col-sm-12">
        <PersonalNumber
          onChange={this.handlePersonalNumberChange}
          personalNumber={personalNumber}
        />
        <hr />
        <MobileNumber onChange={this.handleNumberChange} number={number} />
        <hr />
        <Amount
          onChange={this.handleAmountChange}
          amount={amount}
          comission={comission}
        />
        <hr />
        <Comission comission={comission} />
        <hr />
        <FillButton
          disabled={this.disableButton()}
          onClick={this.handleClick}
        />
        <div>
          {amount && (amount > 100 || amount < 1) ? "incorrect amount" : ""}
        </div>
      </div>
    );
  }
}

export default Utility;
