import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  render() {
    let chartNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message"
        onChange={this.handleChange}
        value={this.state.message}
        />
        {chartNumber}
      </div>
    );
  }
}

export default TwitterMessage;
