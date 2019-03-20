import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      message: ""
    }

    this.handleMessage = this.handleMessage.bind(this)
  }

  handleMessage(event){
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input 
          style = {{border: '3px solid red', margin: '20px', fontSize: '40px'}}
          onChange={this.handleMessage}
          placeholder='Enter Message' /><br />
        <span style={{margin: '20px', fontSize: '50px'}}>{this.state.message}</span>
      </div>
    );
  }
}

export default App;
