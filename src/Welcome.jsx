import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  } 

  componentDidUpdate(prevProps, prevState) {
    // Check if the name has changed
    if (prevState.name !== this.state.name) {
      console.log(`Name changed to: ${this.state.name}`);
      // You can also call the onNameChange prop if needed
      this.props.onNameChange(this.state.name);
    }
  }

  handleInputChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Optionally, you can call the onNameChange prop here as well
    this.props.onNameChange(this.state.name);
    this.setState({ name: '' }); // Clear the input after submission
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Welcome;