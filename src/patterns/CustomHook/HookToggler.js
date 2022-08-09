import React, { Component } from "react";
import Switch from "../../components/Switch/Switch";

export class HookToggler extends Component {
  static On = ({ on }) => (on ? <div className="text-margin">On</div> : null);
  static Off = ({ on }) => (on ? null : <div className="text-margin">Off</div>);
  static SwitchButton = ({ on, toggle }) => (
    <Switch on={on} onChange={toggle} />
  );

  render() {
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
        on: this.props.on,
        toggle: this.props.toggle,
      })
    );
  }
}

export default HookToggler;
