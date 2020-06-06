import React from "react";

const PersonalNumber = ({ onChange, personalNumber }) => {
  return (
    <div className="row input-group">
      <label className="col-md-4 inputLabel" htmlFor="perosnalNum">
        ID Number:
      </label>
      <input
        id="perosnalNum"
        className="col-md-8 inputBox"
        value={personalNumber}
        onChange={onChange}
        maxLength="11"
      />
    </div>
  );
};
export default PersonalNumber;
