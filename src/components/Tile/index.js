import React from "react";
import "./Tile.css";
import { Link } from "react-router-dom";

const Tile = ({ name, goTo }) => {
  return (
    <div className="col-md-6">
      <div className="tile">
        <Link to={goTo} className="mtavruli section-name">
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Tile;
