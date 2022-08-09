import React from "react";
import useToggler from "./hook";
import { HookToggler } from "./HookToggler";

function HookUser() {
  const { on, handleToggler } = useToggler();
  return (
    <>
      <p>Custom Hook Pattern</p>
      <HookToggler toggle={handleToggler} on={on}>
        <HookToggler.SwitchButton />
        <HookToggler.Off />
        <HookToggler.On />
      </HookToggler>
    </>
  );
}

export default HookUser;
