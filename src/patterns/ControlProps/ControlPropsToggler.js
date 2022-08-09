import React from "react";
import Switch from "../../components/Switch/Switch";

function ControlPropsToggler({ on, onToggle }) {
  return (
    <div>
      <Switch on={on} onChange={onToggle} />
      {on ? (
        <div className="text-margin">On</div>
      ) : (
        <div className="text-margin">Off</div>
      )}
    </div>
  );
}

export default ControlPropsToggler;
