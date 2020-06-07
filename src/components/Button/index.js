import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ isDisabled = false, onClick, children }) => {
  return (
    <button
      className="fillBtn"
      type="button"
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  isDisabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
