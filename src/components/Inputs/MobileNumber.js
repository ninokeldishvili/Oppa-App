import React from "react";

const MobileNumber = ({ onChange, number }) => {
  return (
    <div className="row input-group">
      <label className="col-lg-4 col-sm-12 inputLabel" htmlFor="mobileNum">
        Mobile Number:
      </label>
      <input
        id="mobileNum"
        className="col-lg-8 col-sm-12 inputBox"
        value={number}
        onChange={onChange}
        maxLength="9"
      />
    </div>
  );
};
export default MobileNumber;
