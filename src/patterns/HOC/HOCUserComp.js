import React, { Component } from "react";
import Switch from "../../components/Switch/Switch";
import ToggleHOC from "./toggleHOC";

export class HOCUserComp extends Component {
  render() {
    return (
      <>
        <p>HOC Switch</p>
        <Switch on={this.props.state.on} onChange={this.props.toggle} />
        {this.props.state.on ? (
          <div className="text-margin">Off</div>
        ) : (
          <div className="text-margin">Off</div>
        )}
      </>
    );
  }
}

export default ToggleHOC(HOCUserComp);
