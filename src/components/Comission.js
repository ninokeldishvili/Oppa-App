import React from "react";

const Comission = ({ comission }) => {
  return (
    <div className="row input-group">
      <div className="col-lg-4 col-sm-12 inputLabel">Comission:</div>
      <div className="col-lg-8 col-sm-12">{comission}</div>
    </div>
  );
};

export default Comission;
