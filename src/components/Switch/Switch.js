import React from "react";
import "./switchStyles.css";

function Switch({onChange,on}) {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={on} onChange={onChange}/>
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Switch;
