import  { Component } from "react";

export class RenderPropsToggler extends Component {
  static defaultProps = {
    initialOn: false,
  };

  initialState = {
    on: this.props.initialOn
      ? this.props.initialOn
      : this.props.defaultProps.initialOn,
  };

  state = this.initialState;

  toggle = () => {
    this.setState({ on: !this.state.on });
    this.props.onToggle(this.state.on);
  };
  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default RenderPropsToggler;
