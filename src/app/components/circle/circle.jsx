import React from "react";
import "./circle.css";

const Circle = () => {
  return (
    <>
      <div className="circle-main-container">
        <input placeholder="Search" className="circle-input" />
        <div className="circle-buttons-container">
          <div className="circle-button circle-feminist ">Feminst</div>
          <div className="circle-button circle-catchup">Catch Up</div>
          <div className="circle-button circle-bookclub">Book Club</div>
          <div className="circle-button circle-footbant">Football Bant</div>
        </div>
      </div>
    </>
  );
};

export default Circle;
