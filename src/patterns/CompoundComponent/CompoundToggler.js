import React, { Component } from "react";
import Switch from "../../components/Switch/Switch";
import "../../App.css";

class CompoundToggler extends Component {
  state = { on: false };

  static On = ({ on }) => (on ? <div className="text-margin">On</div> : null);
  static Off = ({ on }) => (on ? null : <div className="text-margin">Off</div>);
  static SwitchButton = ({ on, toggle }) => (
    <Switch on={on} onChange={toggle} />
  );

  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
    this.props.onToggle(!this.state.on);
  };

  render() {
    return React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    );
  }
}

export default CompoundToggler;
