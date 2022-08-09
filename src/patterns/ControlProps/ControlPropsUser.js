import React, { useState } from "react";
import ControlPropsToggler from "./ControlPropsToggler";

function ControlPropsUser() {
  const [on, setOn] = useState(true);

  const handleToggle = () => setOn((prev) => !prev);

  return (
    <>
      <p>Control Props pattern</p>
      <ControlPropsToggler on={on} onToggle={handleToggle} />
    </>
  );
}

export default ControlPropsUser;
