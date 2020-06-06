import React from "react";
import MobileNumber from "../components/Inputs/MobileNumber";
import FillButton from "../components/FillButton";
import Comission from "../components/Comission";
import Amount from "../components/Inputs/Amount";

class Mobile extends React.Component {
  state = {
    number: "",
    amount: "",
    comission: 0
  };

  handleNumberChange = e => {
    let number = e.target.value;
    const mobileRegex = /^5[0-9]*$/;
    if (number === "" || new RegExp(mobileRegex).test(number)) {
      this.setState({
        number
      });
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
    const { number, amount } = this.state;
    return !(number.length === 9 && !(amount > 100 || amount < 1));
  };

  handleClick = () => {
    const { comission, amount } = this.state;
    alert(`Your Balance is filled with ${amount - comission} GEL, Thank You!`);
  };

  render() {
    const { number, amount, comission } = this.state;

    return (
      <div className="form-container col-lg-6 mx-auto col-sm-12">
        <MobileNumber onChange={this.handleNumberChange} number={number} />
        <hr />
        <Amount onChange={this.handleAmountChange} amount={amount} />
        <hr />
        <Comission comission={comission} />
        <hr />
        <FillButton
          disabled={this.disableButton()}
          onClick={this.handleClick}
        />
        {amount && (amount > 100 || amount < 1) ? "*incorrect amount" : ""}
      </div>
    );
  }
}

export default Mobile;
