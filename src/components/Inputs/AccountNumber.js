import React from "react";

const AccountNumber = ({ onChange, accountNumber }) => {
  return (
    <div className="row input-group">
      <label
        className="col-md-4 inputLabel"
        title="Account Number"
        htmlFor="accNum"
      >
        Acc. Number:
      </label>
      <input
        className="col-md-8 inputBox"
        id="accNum"
        value={accountNumber}
        onChange={onChange}
        maxLength="22"
        placeholder="GE00XX0000000000000000"
      />
    </div>
  );
};
export default AccountNumber;
