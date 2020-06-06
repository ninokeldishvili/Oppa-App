import React from "react";
import "../components/Inputs/inputs.css";
import Tile from "../components/Tile";

export default function Home() {
  return (
    <div>
      <div className="row">
        <Tile name="მობილური" goTo="/mobile" />
        <Tile name="კომუნალური" goTo="/utility" />
      </div>
      <div className="row">
        <Tile name="ფინანსური მომსახურება" goTo="/finances" />
        <Tile name="ქველმოქმედება" goTo="/charity" />
      </div>
    </div>
  );
}
