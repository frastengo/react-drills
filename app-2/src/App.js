import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ["spaguetti", "ice cream", "sushi", "bologna", "cheese"]
    }
    console.log(this.state)
  }
  render() {
    let list = this.state.data.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    });

    return (
      <div className="App">{list}</div>
    );
  }
}

export default App;
