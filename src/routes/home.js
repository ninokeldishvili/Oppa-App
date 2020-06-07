import React from "react";
import Tile from "../components/Tile";

export default function Home() {
  return (
    <div style={{ maxWidth: 880, margin: "0 auto" }}>
      <div className="row">
        <Tile name="მობილური" goTo="mobile" />
        <Tile name="კომუნალური" goTo="utility" />
        <Tile name="ფინანსური მომსახურება" goTo="finances" />
        <Tile name="ქველმოქმედება" goTo="charity" />
      </div>
    </div>
  );
}
