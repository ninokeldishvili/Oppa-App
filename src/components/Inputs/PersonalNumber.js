import React from "react";

const PersonalNumber = ({ onChange, personalNumber }) => {
  return (
    <div className="row input-group">
      <label className="col-lg-4 col-sm-12 inputLabel" htmlFor="perosnalNum">
        ID Number:
      </label>
      <input
        id="perosnalNum"
        className="col-lg-8 col-sm-12 inputBox"
        value={personalNumber}
        onChange={onChange}
        maxLength="11"
      />
    </div>
  );
};
export default PersonalNumber;
