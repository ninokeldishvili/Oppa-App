import React from "react";

const MobileNumber = ({ onChange, number }) => {
  return (
    <div className="row input-group">
      <label className="col-md-4 inputLabel" htmlFor="mobileNum">
        Mobile Number:
      </label>
      <input
        id="mobileNum"
        className="col-md-8 inputBox"
        value={number}
        onChange={onChange}
        maxLength="9"
      />
    </div>
  );
};
export default MobileNumber;
