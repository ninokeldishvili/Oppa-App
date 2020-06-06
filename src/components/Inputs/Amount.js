import React from "react";

const Amount = ({ onChange, amount }) => {
  return (
    <div className="row input-group">
      <label className="col-lg-4 col-sm-12 inputLabel" htmlFor="amount">
        Amount:
      </label>
      <input
        id="amount"
        className="col-lg-8 col-sm-12 inputBox"
        value={amount}
        onChange={onChange}
      />
    </div>
  );
};
export default Amount;
