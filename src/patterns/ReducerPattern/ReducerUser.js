import React, { Component } from "react";
import Switch from "../../components/Switch/Switch";
import ReducerToggle from "./ReducerToggle";

class ReducerUser extends Component {
  state = { timesClicked: 0 };

  handleToggle = (on) => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
    console.log(on ? "on" : "off");
  };

  toggleStateReducer = (state, changes) => {
    return this.state.timesClicked >= 4 ? { ...changes, on: false } : changes;
  };

  render() {
    return (
      <>
        <p>Render Props Pattern</p>
        <ReducerToggle
          onToggle={this.handleToggle}
          stateReducer={this.toggleStateReducer}
        >
          {({ on, toggle }) => (
            <>
              <Switch on={on} onChange={toggle} />
              <div className="text-margin">{on ? "On" : "Off"}</div>
              <div>
                {this.state.timesClicked > 4 ? (
                  <div>Whoo, you clicked too much</div>
                ) : (
                  <div>Click Count: {this.state.timesClicked}</div>
                )}
              </div>
            </>
          )}
        </ReducerToggle>
      </>
    );
  }
}

export default ReducerUser;
