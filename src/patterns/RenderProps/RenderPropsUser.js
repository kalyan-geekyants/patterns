import React from "react";
import Switch from "../../components/Switch/Switch";
import RenderPropsToggler from "./RenderPropsToggler";

function RenderPropsUser() {
  const handleToggle = (on) => {
    console.log(on ? "on" : "off");
  };

  return (
    <>
      <p>Render Props Pattern</p>
      <RenderPropsToggler onToggle={handleToggle} initialOn={true}>
        {({ on, toggle }) => (
          <>
            <Switch on={on} onChange={toggle} />
            <div className="text-margin">{on ? "On" : "Off"}</div>
          </>
        )}
      </RenderPropsToggler>
    </>
  );
}

export default RenderPropsUser;
