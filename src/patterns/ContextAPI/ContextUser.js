import React, { Component } from "react";
import ContextToggler from "./ContextToggler";

class ContextUser extends Component {
  onToggle = (on) => {
    console.log(on ? "on" : "off");
  };

  render() {
    return (
      <>
        <p>React Context API</p>
        <ContextToggler onToggle={this.onToggle}>
          <ContextToggler.SwitchButton />
          <ContextToggler.Off>
            <div className="text-margin">Off</div>
          </ContextToggler.Off>
          <ContextToggler.On>
            <div className="text-margin">On</div>
          </ContextToggler.On>
        </ContextToggler>
      </>
    );
  }
}

export default ContextUser;
