import React, { Component } from "react";
import Switch from "../../components/Switch/Switch";
import "../../App.css";

const ToggleContext = React.createContext();

// HOC for removing redundant usage of ToggleContext Consumer
function wrapper(Comp, props) {
  return (
    <ToggleContext.Consumer {...props}>
      {(context) => {
        return <Comp context={context} />;
      }}
    </ToggleContext.Consumer>
  );
}

class ContextToggler extends Component {
  state = { on: false };

  static On = ({ children }) =>
    wrapper(({ on }) => {
      return on ? children : null;
    });
  static Off = ({ children }) =>
    wrapper(({ on }) => {
      return on ? null : children;
    });

  static SwitchButton = ({ children }) =>
    wrapper(({ on, toggle }) => <Switch on={on} onChange={toggle} />);

  toggle = () => {
    this.setState(({ on }) => ({ on: !on }));
    this.props.onToggle(!this.state.on);
  };

  render() {
    return (
      <ToggleContext.Provider
        value={{ on: this.state.on, toggle: this.toggle }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default ContextToggler;
