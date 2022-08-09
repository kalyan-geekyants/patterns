import React, { Component } from "react";
import CompoundToggler from "./CompoundToggler";

class CompoundUser extends Component {
  onToggle = (on) => {
    console.log(on ? "on" : "off");
  };

  render() {
    return (
      <>
      <p>Compound Components pattern</p>
        <CompoundToggler onToggle={this.onToggle}>
          <CompoundToggler.SwitchButton />
          <CompoundToggler.Off />
          <CompoundToggler.On />
        </CompoundToggler>
      </>
    );
  }
}

export default CompoundUser;
