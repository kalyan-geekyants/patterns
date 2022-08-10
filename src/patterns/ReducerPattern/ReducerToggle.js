import { Component } from "react";

export class ReducerToggle extends Component {
  state = { on: false };

  internalSetState(changes, callback) {
    this.setState((state) => {
      const changesObject =
        typeof changes == "function" ? changes(state) : changes;
      const reducedChanges =
        this.props.stateReducer(state, changesObject) || null;
      return Object.keys(reducedChanges).length ? reducedChanges : null;
    }, callback);
  }

  toggle = () => {
    this.internalSetState(
      ({ on }) => ({ on: !on }),
      () => this.props.onToggle(this.state.on)
    );
  };
  render() {
    return this.props.children({
      on: this.state.on,
      toggle: this.toggle,
    });
  }
}

export default ReducerToggle;
