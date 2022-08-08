import React from "react";
import "./switchStyles.css";

function Switch() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Switch;
