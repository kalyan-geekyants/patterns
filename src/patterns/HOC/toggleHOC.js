import React, { Component } from 'react'

function ToggleHOC(Comp) {

    return class Toggle extends Component{
        state ={on: false}
        toggle = () =>{
            this.setState({on: !this.state.on})
        }
        render(){
            return <Comp {...this.props} state={this.state} toggle={this.toggle} />;
        }
    }
}

export default ToggleHOC;