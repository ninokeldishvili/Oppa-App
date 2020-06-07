import React from "react";

const Comission = ({ value }) => {
  return (
    <div className="row input-group">
      <div className="col-4 inputLabel">Comission:</div>
      <div className="col-8">{value}</div>
    </div>
  );
};

export default Comission;
