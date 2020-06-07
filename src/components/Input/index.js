import React from "react";
import PropTypes from "prop-types";
import "./input.css";

const Input = ({ label, value, onChange, title = "", ...rest }) => {
  let labelId = label.split(" ")[0];

  return (
    <div className="row input-group">
      <label className="col-md-4 inputLabel" htmlFor={labelId} title={title}>
        {label}:
      </label>
      <input
        id={labelId}
        className="col-md-8 inputBox"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
