import React from "react";

const FillButton = ({ disabled, onClick }) => {
  return (
    <button
      className="fillBtn"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      Fill Balance
    </button>
  );
};

export default FillButton;
