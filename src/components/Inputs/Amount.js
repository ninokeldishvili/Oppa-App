import React from "react";

const Amount = ({ onChange, amount }) => {
  return (
    <div className="row input-group">
      <label className="col-md-4 inputLabel" htmlFor="amount">
        Amount:
      </label>
      <input
        id="amount"
        className="col-md-8 inputBox"
        value={amount}
        onChange={onChange}
      />
    </div>
  );
};
export default Amount;
