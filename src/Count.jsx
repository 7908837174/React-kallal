import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);  
    this.state = { value: this.props.initial }; 
    console.log("Constructor Called!");
  }

  componentDidMount() {
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      console.log("State has changed!");
    }
  } 

  render() {
    return <div>Welcome Component</div>;
  }
}

export default Welcome;
