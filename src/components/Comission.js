import React from "react";

const Comission = ({ comission }) => {
  return (
    <div className="row input-group">
      <div className="col-4 inputLabel">Comission:</div>
      <div className="col-8">{comission}</div>
    </div>
  );
};

export default Comission;
