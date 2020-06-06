import React from "react";

const ErrorMessage = ({ children }) => {
  return <div style={{ color: "red", marginTop: "1rem" }}>{children}</div>;
};

export default ErrorMessage;
